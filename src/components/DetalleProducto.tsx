import { useParams } from 'react-router-dom';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  Image,
  Flex,
  Button,
  Icon,
  Table,
  Tbody,
  Tr,
  Td,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  IconButton
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FaStore, FaTruck } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import { productsAll } from '../data';
import { useState } from 'react';

const DetalleProducto = () => {
  const { id } = useParams();
  const producto = productsAll.find(p => p.id.toString() === id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalIndex, setModalIndex] = useState(0);

  if (!producto) return <Text>Producto no encontrado</Text>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const handleImageClick = (index: number) => {
    setModalIndex(index);
    onOpen();
  };

  const handlePrev = () => {
    setModalIndex((prev) => (prev === 0 ? producto.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setModalIndex((prev) => (prev === producto.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box w="100%" px={4} mt={{ base: "15px", md: "80px" }}>
      {/* Breadcrumb */}
      <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} mb={4}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/productos">Productos</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{producto.name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Nombre del producto */}
      <Heading size="lg" mb={4}>{producto.name}</Heading>

      {/* Galería de imágenes */}
      <Box maxW="400px" mb={6}>
        {producto.images.length > 1 ? (
          <Slider {...sliderSettings}>
            {producto.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={producto.name}
                borderRadius="md"
                onClick={() => handleImageClick(i)}
                cursor="pointer"
              />
            ))}
          </Slider>
        ) : (
          <Image
            src={producto.images[0]}
            alt={producto.name}
            borderRadius="md"
            onClick={() => handleImageClick(0)}
            cursor="pointer"
          />
        )}
      </Box>

      {/* Modal para imagen ampliada */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay bg="blackAlpha.700" />
        <ModalContent bg="transparent" boxShadow="none">
        <ModalCloseButton color="white" top={4} right={4} position="fixed" zIndex={9999} />
          <ModalBody display="flex" alignItems="center" justifyContent="center" position="relative">
            <IconButton
              icon={<IoIosArrowBack />}
              position="absolute"
              left={2}
              top="50%"
              transform="translateY(-50%)"
              onClick={handlePrev}
              aria-label="Anterior"
              colorScheme="whiteAlpha"
            />
            <Image src={producto.images[modalIndex]} maxH="80vh" borderRadius="md" />
            <IconButton
              icon={<IoIosArrowForward />}
              position="absolute"
              right={2}
              top="50%"
              transform="translateY(-50%)"
              onClick={handleNext}
              aria-label="Siguiente"
              colorScheme="whiteAlpha"
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Precio y botón */}
      <Text fontSize="2xl" color="green.500" fontWeight="bold" mb={2}>${producto.price}</Text>
      <Button colorScheme="teal" mb={6}>Agregar al carrito</Button>

      {/* Info de envío y retiro */}
      <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={10}>
        <Box borderWidth="1px" borderRadius="md" p={4} flex={1}>
          <HStack mb={2}><Icon as={FaStore} /><Text fontWeight="bold">Nuestros locales</Text></HStack>
          <VStack align="start" spacing={1}>
            <Text>📍 Bahía Blanca, Buenos Aires</Text>
            <Text>📍 CABA, Capital Federal</Text>
          </VStack>
       
          <Text>CON TURNO PREVIO</Text>
          <Text color="green.500" fontWeight="bold" mt={2}>Gratis</Text>
        </Box>

        <Box borderWidth="1px" borderRadius="md" p={4} flex={1}>
          <HStack mb={2}><Icon as={FaTruck} /><Text fontWeight="bold">Envíos a todo el país</Text></HStack>
          <Text>A coordinar con el vendedor.</Text>
        </Box>
      </Flex>

      {/* Detalles del producto */}
      <Box mb={4}>
        <Heading size="md" mb={3}>Detalles del producto</Heading>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td fontWeight="bold">Modelo</Td>
              <Td>{producto.name}</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Colores</Td>
              <Td>{producto.colors?.join(', ') || 'No especificado'}</Td>
          
            </Tr>
            <Tr>
              <Td fontWeight="bold">Capacidad</Td>
              <Td>{producto.capacity || 'No especificada'}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      {/* Garantía */}
      {producto.category === 2 && (
        <Text mt={4} mb={4} fontStyle="italic" color="gray.600">
          Garantía Apple oficial de un año
        </Text>
      )}
    </Box>
  );
};

export default DetalleProducto;

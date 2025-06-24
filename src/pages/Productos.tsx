import { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Flex,
  SimpleGrid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
  Text,
  Input,
  Select,
  Link,
} from '@chakra-ui/react';
import { ChevronRightIcon, CloseIcon } from '@chakra-ui/icons';
import { IoFilter } from 'react-icons/io5';
import ProductCard from '../components/ProductCard';
import { productsAll, categories } from '../data';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Productos = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(productsAll);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoriaNombre = params.get('categoria');
  
    if (categoriaNombre) {
      const categoria = categories.find(cat => cat.name.toLowerCase() === categoriaNombre.toLowerCase());
      if (categoria) {
        const filtered = productsAll.filter(product => product.category === categoria.id);
        setFilteredProducts(filtered);
        setSelectedCategories([categoria.id]);
      }
    }
  }, [location.search]);
  


  const handleToggleCategory = (categoryId: number) => {
    const updatedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];

    setSelectedCategories(updatedCategories);

    const filtered = productsAll.filter((product) =>
      updatedCategories.length === 0 ? true : updatedCategories.includes(product.category)
    );

    setFilteredProducts(filtered);
  };

  return (
    <Box w="100%" px={4} mt={{ base: "15px", md: "80px" }}>
      <Link
              href="https://wa.me/message/5RCBRGOHGKPVL1"
              isExternal
              position="fixed"
              bottom="20px"
              right="20px"
              zIndex="1000"
            >
              <Box
                as={FaWhatsapp}
                boxSize="60px"
                color="#25D366" // verde oficial WhatsApp
                _hover={{ transform: "scale(1.1)" }}
                transition="all 0.3s ease"
              />
            </Link>


      {/* Breadcrumb */}
      <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} mb={4}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/productos">Productos</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex mt={2} wrap="wrap" gap={2}>
  {selectedCategories.map((id) => {
    const cat = categories.find((c) => c.id === id);
    return (
      <Box
        key={id}
        px={3}
        py={1}
        bg="gray.100"
        borderRadius="md"
        display="flex"
        alignItems="center"
        fontSize="sm"
      >
        {cat?.name}
        <IconButton
          icon={<CloseIcon boxSize={2.5} />}
          size="xs"
          ml={2}
          aria-label="Quitar filtro"
          onClick={() => handleToggleCategory(id)}
        />
      </Box>
    );
  })}

</Flex>
      <Flex justify="space-between" align="center" mb={5} >
        <Heading size="md">Productos</Heading>
        <Button
          size="sm"
          colorScheme="white"
          variant="outline"
          borderColor="black"
          color="black"
          onClick={() => setIsFilterOpen(true)}
          leftIcon={<IoFilter />}
          _hover={{
            backgroundColor: "gray.100",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}
          _active={{
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Filtrar
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mb={5}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>

      {isFilterOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bg="white"
          zIndex="1000"
          px={4}
          py={6}
          overflowY="auto"
        >
          <Flex justify="space-between" align="center" mb={6}>
            <Box w="32px" />
            <Heading size="md" textAlign="center">FILTROS</Heading>
            <IconButton
              aria-label="Cerrar filtro"
              icon={<CloseIcon />}
              size="sm"
              variant="ghost"
              onClick={() => setIsFilterOpen(false)}
            />
          </Flex>

          <Box mb={6}>
  <Text fontWeight="bold" mb={2}>Ordenar</Text>
  <Select placeholder="Seleccionar orden">
    <option value="precioMayor">Precio: mayor a menor</option>
    <option value="precioMenor">Precio: menor a mayor</option>
    <option value="az">A - Z</option>
    <option value="za">Z - A</option>
  </Select>
</Box>

<Box mb={6}>
  <Text fontWeight="bold" mb={4}>Categorías</Text>
  <Flex gap={2} wrap="wrap">
    {categories.map((cat) => (
      <Button
        key={cat.id}
        size="sm"
        variant="outline"
        colorScheme="blackAlpha"
        onClick={() => {
          const filtered = productsAll.filter(product => product.category === cat.id);
          setFilteredProducts(filtered);
          setSelectedCategories([cat.id]);
          setIsFilterOpen(false);
        }}
      >
        {cat.name}
      </Button>
    ))}
  </Flex>
</Box>

<Box>
  <Text fontWeight="bold" mb={2}>Precio</Text>
  <Flex  gap={2} mb={3}>
    <Input w={"140px"} placeholder="Desde" type="number" />
    <Input w={"140px"} placeholder="Hasta" type="number" />
 
  <Button size="sm" colorScheme="blackAlpha">
    Aplicar
  </Button>
  </Flex>
</Box>
        </Box>
      )}
    </Box>
  );
};

export default Productos;

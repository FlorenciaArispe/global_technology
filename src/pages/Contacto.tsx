import {
    Box,
    Text,
    Input,
    Textarea,
    Button,
    VStack,
    useToast,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Link,
  } from "@chakra-ui/react";
  import { ChevronRightIcon } from "@chakra-ui/icons";
  import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
  
  const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");
    const toast = useToast();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!nombre || !correo || !telefono || !mensaje) {
        toast({
          title: "Por favor completá todos los campos.",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
  
      toast({
        title: "Mensaje enviado.",
        description: "Gracias por contactarnos.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
  
      setNombre("");
      setCorreo("");
      setTelefono("");
      setMensaje("");
    };
  
    return (
      <>
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

       <Box w="100%" px={4} mt={{ base: "65px", md: "80px" }} maxW="700px" mx="auto">
        {/* Breadcrumb */}
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} mb={6}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/contacto">Contacto</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
                <Heading size="md">Contacto</Heading>
        
  
        {/* Información de contacto */}
        <VStack align="start" spacing={5} mb={6} mt={5}>
          <Text fontSize="lg">📞 (291) 123-4567</Text>
          <Text fontSize="lg">📞 (11) 7654-3210</Text>
          <Text fontSize="lg">✉️ contacto@ejemplo.com</Text>
          <Text fontWeight="medium" mt={2}>
            📍 Retiro directo en Bahía Blanca y CABA
          </Text>
        </VStack>
  
        {/* Formulario */}
        <Box as="form" onSubmit={handleSubmit} mb={20}>
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <Input
              type="tel"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <Textarea
              placeholder="Mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
            <Button type="submit" colorScheme="blue">
              Enviar
            </Button>
          </VStack>
        </Box>
      </Box>
      </>
     
    );
  };
  
  export default Contacto;
  
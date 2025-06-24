import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box bg="gray.900" color="white" py={10}>
      <Container maxW="container.xl">
        {/* Título centrado */}
        <Flex justify="center" mb={2}>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Global Technology
          </Text>
        </Flex>

        {/* Redes sociales centradas */}
      <Flex justify="center" mb={2}>
  <Stack direction="row" spacing={4}>
    <IconButton
      as="a"
      href="https://www.facebook.com"
      target="_blank"
      icon={<FaFacebook size="28px" />} // tamaño del ícono
      variant="ghost"
      aria-label="Facebook"
      color="white"
      fontSize="2xl" // asegura tamaño general
      _hover={{ bg: "facebook.500" }}
      boxSize="60px" // tamaño del botón
    />
    <IconButton
      as="a"
      href="https://www.instagram.com"
      target="_blank"
      icon={<FaInstagram size="28px" />}
      variant="ghost"
      aria-label="Instagram"
      color="white"
      fontSize="2xl"
      _hover={{ bg: "instagram.500" }}
      boxSize="60px"
    />
  </Stack>
</Flex>


        {/* Parte inferior con descripción + enlaces */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={8}>
          {/* Descripción alineada a la izquierda */}
          <Box>
            <Text fontSize="md">
              Compra los productos Apple más recientes. Encuentra los mejores iPhones, accesorios y más. Calidad, tecnología y el mejor precio en un solo lugar.
            </Text>
          </Box>

          {/* Enlaces rápidos */}
          <Stack spacing={2} align={{ base: "flex-start", md: "flex-end" }}>
            <Text fontSize="lg" fontWeight="semibold">
              Enlaces rápidos
            </Text>
            <Link
              as="button"
              fontWeight="semibold"
              onClick={() => navigate("/")}
              _hover={{ textDecoration: "underline" }}
            >
              Inicio
            </Link>
            <Link
              as="button"
              fontWeight="semibold"
              onClick={() => navigate("/productos")}
              _hover={{ textDecoration: "underline" }}
            >
              Productos
            </Link>
            <Link
              as="button"
              onClick={() => navigate("/plan-canje")}
              _hover={{ textDecoration: "underline" }}
              fontWeight="semibold"
            >
              Plan Canje
            </Link>
            <Link 
             onClick={() => navigate("/contacto")}
           _hover={{ textDecoration: "underline" }} fontWeight="semibold">
              Contacto
            </Link>
          </Stack>
        </SimpleGrid>

        {/* Derechos reservados */}
        <Box textAlign="center" pt={4} borderTop="1px solid rgba(255,255,255,0.2)">
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Global Technology. Todos los derechos reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

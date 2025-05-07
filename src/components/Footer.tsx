import { Box, Container, Stack, Text, Link, SimpleGrid, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <Box bg="gray.700" color="white" py={8}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* Columna 1: Descripción */}
          <Stack spacing={4}>
            <Text fontSize="xl" fontWeight="bold">Global Technology</Text>
            <Text fontSize="md">
            Compra los productos Apple más recientes. Encuentra los mejores iPhones, accesorios y más. Calidad, tecnología y el mejor precio en un solo lugar.
            </Text>
          </Stack>

          {/* Columna 2: Enlaces rápidos */}
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="semibold">Enlaces rápidos</Text>
            <Link
            textAlign={"left"}
  as="button"
  onClick={() => {
    navigate('/');
  }}
  _hover={{ textDecoration: 'underline' }}
>
Inicio</Link>
            <Link
            textAlign={"left"}
  as="button"
  onClick={() => {
    navigate('/productos');
  }}
  _hover={{ textDecoration: 'underline' }}
>
  Productos
</Link>
<Link
            textAlign={"left"}
  as="button"
  onClick={() => {
    navigate('/plan-canje');
  }}
  _hover={{ textDecoration: 'underline' }}
>
Plan Canje</Link>

            <Link href="#" _hover={{ textDecoration: 'underline' }}>Contacto</Link>
          
          </Stack>

          {/* Columna 3: Redes sociales */}
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="semibold">Síguenos</Text>
            <Stack direction="row" spacing={4}>
              <IconButton
                as="a"
                href="https://www.facebook.com"
                target="_blank"
                icon={<FaFacebook />}
                variant="ghost"
                aria-label="Facebook"
                color="white"
                _hover={{ bg: "facebook.500" }}
              />
              <IconButton
                as="a"
                href="https://www.instagram.com"
                target="_blank"
                icon={<FaInstagram />}
                variant="ghost"
                aria-label="Instagram"
                color="white"
                _hover={{ bg: "instagram.500" }}
              />
            </Stack>
          </Stack>
        </SimpleGrid>

        {/* Copyright */}
        <Box mt={8} textAlign="center">
          <Text fontSize="sm">&copy; {new Date().getFullYear()} Global Technology. Todos los derechos reservados.</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

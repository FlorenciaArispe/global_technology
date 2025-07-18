import { Box, Image, Text, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }: any) => {
  // Armar nombre dinámico
  const nombre =
    product.categoria === 1 || product.categoria === 2
      ? `${product.modelo || ''} ${product.capacidad || ''}`.trim()
      : product.nombre;

  // Usar primera imagen del array de fotos si existe
  const primeraFoto =
    Array.isArray(product.fotos) && product.fotos.length > 0
      ? product.fotos[0]
      : "/images/no-image.jpg"; // Imagen por defecto si no hay

  return (
    <Link to={`/productos/${product.id}`}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        boxShadow="lg"
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: 'scale(1.05)' }}
        cursor="pointer"
      >
        <Image
          src={primeraFoto}
          alt={nombre}
          width="100%"
          height="200px"
          objectFit="cover"
        />
        <Stack p={4}>
          <Text fontSize="xl" fontWeight="bold" noOfLines={2} isTruncated>
            {nombre}
          </Text>
          <Text fontSize="lg" color="green.500" fontWeight="semibold">
            ${product.minorista}
          </Text>
        </Stack>
      </Box>
    </Link>
  );
};

export default ProductCard;

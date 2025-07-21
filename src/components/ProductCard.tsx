import { Box, Image, Text, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }: any) => {

  const nombre =
    product.categoria === 1 || product.categoria === 2
      ? `${product.modelo || ''} ${product.capacidad || ''}`.trim()
      : product.nombre;

  const primeraFoto =
    Array.isArray(product.fotos) && product.fotos.length > 0
      ? product.fotos[0]
      : "/images/no-image.jpg"; 

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
          height="220px"
          objectFit="cover"
        />
       <Stack p={2} minH={"99px"}>
  <Text fontSize="16px" fontWeight="semibold" noOfLines={2}>
    {nombre}{" "}
    {product.categoria === 1 && (
      <Text as="span" fontSize="sm" color="gray.500">
        - SELLADO NUEVO
      </Text>
    )}
    {product.categoria === 2 && (
      <Text as="span" fontSize="sm" color="gray.500">
        - USADO PREMIUM
      </Text>
    )}
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

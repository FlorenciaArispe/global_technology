import { Box, Image, Text, Stack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }: any) => {
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
      src={product.image}
      alt={product.name}
      width="100%"
      height="200px"
      objectFit="cover"
    />
    <Stack p={4}>
      <Text fontSize="xl" fontWeight="bold" noOfLines={2} isTruncated>
        {product.name}
      </Text>
      <Text fontSize="md" color="gray.500">
        {product.description}
      </Text>
      <Text fontSize="lg" color="green.500" fontWeight="semibold">
        ${product.price}
      </Text>
    </Stack>
    {/* <Box p={4}>
      <Button
        size="sm"
        colorScheme="teal"
        width="100%"
        borderRadius="md"
        _hover={{ bg: 'teal.600' }}
      >
        Ver más
      </Button>
    </Box> */}
  </Box>
</Link>

  );
};

export default ProductCard;

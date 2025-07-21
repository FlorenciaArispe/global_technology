import { Box, Button, HStack, Icon, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaShieldAlt, FaStore, FaTruck, FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/supabase.service";
import { getProductos, getProductosDestacados } from "../supabase/productos.service";

const MotionBox = motion(Box);


const images = [
  "/products/16-promax.jpeg",
  "/products/16.jpeg",
  "/products/cajas-16promax.jpeg",
  "/products/fundas-14.jpeg",
  "/products/fundas-16promax.jpeg",
  "/products/fundas-16pro.jpeg",
  "/products/13.jpeg",
];

function Inicio() {
  const navigate = useNavigate();

  const [productos, setProductos] =useState([])
  const [productosDestacados, setProductosDestacados] = useState([]);

useEffect(() => {
  // Trae productos y destacados al inicio y ante cambios
  const fetchProductos = async () => {
    const todos = await getProductos();
    setProductos(todos);

    const destacados = await getProductosDestacados();
    console.log("DESTACADOS", destacados)
    setProductosDestacados(destacados);
  };

  fetchProductos();
  const productosChannel = supabase
    .channel('productos')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'productos' },
      async () => {
        console.log("CAMBIO DETECTADO");
        await fetchProductos();
      }
    )
    .subscribe();

  return () => {
    productosChannel.unsubscribe();
  };
}, []);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const itemWidth = 165 + 24; 

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollRef.current?.scrollLeft || 0;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(index);
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box w="100%" position="relative">
  
   <Box bg="rgb(248, 248, 248)" minHeight="100vh" >
        <Image 
          src="/images/portada2.png" 
          alt="Imagen descriptiva"
          objectFit="cover"
          w="100%"  
        
        />

      <Box mt={8} px={1}>

      <Box
        ref={scrollRef}
        overflowX="auto"
        whiteSpace="nowrap"
        display="flex"
        gap={6}
        pb={4}
        css={{
          scrollbarWidth: "none", 
          msOverflowStyle: "none", 
          "&::-webkit-scrollbar": {
            display: "none", 
          },
        }}
      >
        {images.map((src, index) => (
          <MotionBox
            key={index}
            minW="165px"
            h="183px"
            flex="0 0 auto"
            borderRadius="20px"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
            backgroundImage={`url(${src})`}
            backgroundSize="cover"
            backgroundPosition="center"
            cursor="pointer"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
      </Box>
      <HStack justify="center" mt={3} spacing={2}>
        {images.map((_, index) => (
          <Box
            key={index}
            w={2}
            h={2}
            borderRadius="full"
            bg={index === activeIndex ? "gray.500" : "gray.300"}
            transition="background 0.3s"
          />
        ))}
      </HStack>
    </Box>

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
    color="#25D366" 
    _hover={{ transform: "scale(1.1)" }}
    transition="all 0.3s ease"
  />
</Link>

        <Box p={8}>
  <Text mb={4} fontSize={"18px"} fontWeight={700}> Productos destacados</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {productosDestacados.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
      <Box textAlign="center" mt={6}>
        <Button
          size="sm"
          colorScheme="white"
          variant="outline"   
          borderColor="black"
          color="black"    
          _hover={{ 
            backgroundColor: "gray.100", 
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}
          _active={{
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
          onClick={() => navigate('/productos')}
        >
        VER MÁS EQUIPOS
        </Button>
  </Box>
      </Box>

<VStack mt={10} mb={10} spacing={8} align="center">
      {/* Envíos */}
      <Box textAlign="center" maxW="300px">
        <Icon as={FaTruck} boxSize={12} color="black" mb={4} />
        <Box fontWeight="bold" fontSize="xl" mb={2}>
          Envíos a todo el país
        </Box>
        <Box color="gray.600" fontSize="sm">
          Coordinado con el vendedor luego de aprobar el pedido.
        </Box>
      </Box>

      {/* Retiros */}
      <Box textAlign="center" maxW="300px">
        <Icon as={FaStore} boxSize={12} color="black" mb={4} />
        <Box fontWeight="bold" fontSize="xl" mb={2}>
          Retiros
        </Box>
        <Box color="gray.600" fontSize="sm">
          Retirá personalmente en Bahía Blanca.
        </Box>
      </Box>

      {/* Pagos */}
      <Box textAlign="center" maxW="300px">
        <Icon as={FaMoneyBillWave} boxSize={12} color="black" mb={4} />
        <Box fontWeight="bold" fontSize="xl" mb={2}>
          Pagos
        </Box>
        <Box color="gray.600" fontSize="sm">
          Pagá en efectivo o por transferencia bancaria.
        </Box>
      </Box>

      {/* Compra segura */}
      <Box textAlign="center" maxW="300px">
        <Icon as={FaShieldAlt} boxSize={12} color="black" mb={4} />
        <Box fontWeight="bold" fontSize="xl" mb={2}>
          Compra segura
        </Box>
        <Box color="gray.600" fontSize="sm">
          Tus datos están protegidos durante toda la operación.
        </Box>
      </Box>
    </VStack>


    </Box>
     </Box>
  );
}

export default Inicio;
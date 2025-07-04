import { Box, Button, Flex, HStack, Icon, Image, Link, SimpleGrid, Slider, Stack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaShieldAlt, FaStore, FaTruck, FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { productsDestacados } from "../data";
import supabase from "../supabase/supabase.service";
import { fetchProductos } from "../services/fetchData";


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

  useEffect(() => {
      const productosChannel = supabase
        .channel('productos')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'productos' }, async () => {
          const productosData = await fetchProductos()
          console.log("PRODUCTOS ACAAAA",productosData)
          // setProductos(productosData)
        })
        .subscribe()
  
  
  
      return () => {
        productosChannel.unsubscribe()
      }
    }, [])


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
        {/* Imagen arriba de todo */}
        <Image 
          src="/images/portada2.png" 
          alt="Imagen descriptiva"
          objectFit="cover"
          w="100%"  
         
        />


      <Box mt={8} px={1}>
      {/* Contenedor scrollable */}
      <Box
        ref={scrollRef}
        overflowX="auto"
        whiteSpace="nowrap"
        display="flex"
        gap={6}
        pb={4}
        css={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          "&::-webkit-scrollbar": {
            display: "none", // Chrome/Safari
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

      {/* Stepper de puntitos */}
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
    color="#25D366" // verde oficial WhatsApp
    _hover={{ transform: "scale(1.1)" }}
    transition="all 0.3s ease"
  />
</Link>
     

       {/* <Stack direction="column" spacing={4} p={4}>
           <Text mt={2} fontSize={"18px"} fontWeight={700}> Productos</Text>
          <Flex direction="row" justify="space-between" align="center" wrap="wrap">
            <Button 
              fontWeight={300}
              fontSize={"15px"}
            //  variant={filtro === 'todos' ? 'solid' : 'outline'} // Cambia el fondo si está seleccionado
              color={'gray.600'}
              //bg={filtro === 'todos' ? '#ccc' : 'transparent'}
              //borderColor={filtro === 'todos' ? 'gray.100' : '#ccc'}
              //onClick={() => setFiltro('todos')} 
              flex="1" 
              _hover={{ borderColor: 'white' }}
              _active={{ borderColor: 'white' }}
            >
              Todos
            </Button>
            <Button 
              fontWeight={300}
              fontSize={"15px"}
             // variant={filtro === 'nuevos' ? 'solid' : 'outline'}
              color={'gray.600'}
              //bg={filtro === 'nuevos' ? '#ccc' : 'transparent'}
              //borderColor={filtro === 'nuevos' ? 'gray.100' : '#ccc'}
              //onClick={() => setFiltro('nuevos')} 
              flex="1" 
              m={1}
              _hover={{ borderColor: 'white' }}
              _active={{ borderColor: 'white' }}
            >
              Sellados
            </Button>
            <Button 
              fontWeight={300}
              fontSize={"15px"}
              //variant={filtro === 'usados' ? 'solid' : 'outline'}
             color={'gray.600'}
              //bg={filtro === 'usados' ? '#ccc' : 'transparent'}
              //borderColor={filtro === 'usados' ? 'gray.100' : '#ccc'}
              //onClick={() => setFiltro('usados')} 
              flex="1" 
              m={1}
              _hover={{ borderColor: 'white' }}
              _active={{ borderColor: 'white' }}
            >
              Usados
            </Button>
            <Button 
              fontWeight={300}
              fontSize={"15px"}
             // variant={filtro === 'accesorios' ? 'solid' : 'outline'}
             color={'gray.600'}
              //bg={filtro === 'accesorios' ? '#ccc' : 'transparent'}
              //borderColor={filtro === 'accesorios' ? 'gray.100' : '#ccc'}
              //onClick={() => setFiltro('accesorios')} 
              flex="1" 
              _hover={{ borderColor: 'white' }}
              _active={{ borderColor: 'white' }}
            >
              Accesorios
            </Button>
          </Flex>
        </Stack> */}

        <Box p={8}>
  <Text mb={4} fontSize={"18px"} fontWeight={700}> Productos destacados</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {productsDestacados.map((product) => (
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
   

        {/* Grid de productos */}
        {/* <SimpleGrid 
          columns={{ base: 2, md: 4 }}  
          spacing={4} 
          p={4}
        >
          {productosFiltrados.length === 0 ? (
            <Box textAlign="center" color="gray.500" fontSize="lg">
              Producto no encontrado
            </Box>
          ) : (
            productosFiltrados.map((producto) => (
              <CardProduct key={producto.id} producto={producto} modelos={modelos} />
            ))
          )}
        </SimpleGrid> */}
      </Box>





      {/* DISEÑO ANTERIOR */}


     

{/* SECCION DE INFORMACION  */}
{/* <Box
  mt={6}
  px={{ base: 4, md: 16 }}
  py={10}

>
  <Box
    display="flex"
    flexDirection={{ base: "column", md: "row" }}
    justifyContent="space-between"
    alignItems="center"
    gap={8}
  >
    {[1, 2, 3].map((_, index) => (
      <Box
        key={index}
        textAlign="center"
        maxW="300px"
        mx="auto"
      >
        <Icon as={FaTruck} boxSize={12} color="black" mb={4} />

        <Box fontWeight="bold" fontSize="xl" mb={2}>
          Envíos a todo el país
        </Box>
        <Box color="gray.600" fontSize="sm">
          Coordinado con el vendedor luego de aprobar el pedido.
        </Box>
      </Box>
    ))}
  </Box>
</Box> */}
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
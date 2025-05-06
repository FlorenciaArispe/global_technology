import { Box, Button, HStack, Icon, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaTruck } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { productsDestacados } from "../data";


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

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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
    <Box w="100%" mt={{ base: "60px", md: "80px" }} position="relative">
      {/* Carrousel */}
      <Box w="100%" display="flex" justifyContent="center">
        <Box
          w="100%"
          maxW="1200px"
          h={{ base: "650px", md: "700px" }}
          overflow="hidden"
          boxShadow="0 4px 6px rgba(73, 71, 71, 0.4)"
          borderRadius={{ base: 0, md: "20px" }}
        >
          <Slider {...settings}>
            {images.map((src, index) => (
              <Box key={index} h={{ base: "650px", md: "700px" }} w="100%">
                <Image
                  src={src}
                  alt={`slide-${index}`}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      <Link
        href="https://wa.me/5491123456789" 
        isExternal
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="1000"
      >
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          boxSize="60px"
          borderRadius="full"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.3)"
          _hover={{ transform: "scale(1.1)" }}
          transition="all 0.3s ease"
        />
      </Link>

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

<Box
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
</Box>

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
        Ver todos
        </Button>
   
  </Box>
    </Box>

    


    </Box>
  );
}

export default Inicio;
import { Box, Image, Link } from "@chakra-ui/react";
import Slider from "react-slick";

function Inicio() {
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

  const images = [
    "/products/16-promax.jpeg",
    "/products/16.jpeg",
    "/products/cajas-16promax.jpeg",
    "/products/fundas-14.jpeg",
    "/products/fundas-16promax.jpeg",
    "/products/fundas-16pro.jpeg",
    "/products/13.jpeg",
  ];

  return (
    <Box w="100%" mt={{ base: 0, md: "80px" }} position="relative">
      {/* Carrousel */}
      <Box w="100%" display="flex" justifyContent="center">
        <Box
          w="100%"
          maxW="1200px"
          h={{ base: "550px", md: "700px" }}
          overflow="hidden"
          boxShadow="0 4px 6px rgba(73, 71, 71, 0.4)"
          borderRadius={{ base: 0, md: "20px" }}
        >
          <Slider {...settings}>
            {images.map((src, index) => (
              <Box key={index} h={{ base: "550px", md: "700px" }} w="100%">
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

      {/* Contenido debajo */}
      <Box maxW={{ base: "100%", md: "1300px" }} mx="auto">
        <Box bg="white" h="150px" mt={10}></Box>
        <Box bg="white" h="150px"></Box>
        <Box bg="white" h="150px"></Box>
        <Box bg="white" h="150px"></Box>
        <Box bg="white" h="150px"></Box>
        <Box bg="white" h="150px"></Box>
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
    </Box>
  );
}

export default Inicio;

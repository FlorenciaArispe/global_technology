// components/Inicio.tsx
import { Box, Image } from "@chakra-ui/react";
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
    "https://picsum.photos/id/1018/800/1600",
    "https://picsum.photos/id/1015/800/1600",
    "https://picsum.photos/id/1016/800/1600",
  ];

  return (
    <Box w="100%" h="100vh" overflow="hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} h="100vh" w="100%">
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
  );
}

export default Inicio;

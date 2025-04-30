import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { MenuMobile } from "./MenuMobile";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
<Box
  as="header"
  p={1}
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  position="fixed"
  top={0}
  left={0}
  right={0}
  zIndex={10}
  bg={"#efebe5"}
  h={"60px"}
  // bg="rgba(255, 255, 255, 0.3)"
  // backdropFilter="blur(8px)"
  boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
>
      {/* Logo solo (izquierda) en mobile */}
      <Box display={{ base: "block", md: "none" }}>
        <Image src="/images/COMPLETO-Negro.svg" alt="Logo" height="40px" ml={1} />
      </Box>

      {/* Nombre centrado en mobile */}
      {/* <Image
        src="/images/solo-nombre.svg"
        alt="Nombre"
        height="24px"
        position="absolute"
        left="50%"
        mt={1}
        transform="translateX(-50%)"
        display={{ base: "block", md: "none" }}
      /> */}

      {/* Logo completo en desktop */}
      <Image
        src="/images/COMPLETO-Negro.svg"
        alt="Logo completo"
        height="46px"
        ml={1}
        display={{ base: "none", md: "block" }}
      />

      {/* Menú central en desktop */}
      <Flex
        gap={6}
        align="center"
        display={{ base: "none", md: "flex" }}
        ml="auto"
        mr={4}
      >
        <Text cursor="pointer">Productos</Text>
        <Text cursor="pointer">iPhone 16</Text>
        <Icon as={FiUser} boxSize={5} cursor="pointer" />
        <Icon as={FiShoppingCart} boxSize={5} cursor="pointer" />
      </Flex>

      {/* Menú hamburguesa en mobile */}
      <Box display={{ base: "block", md: "none" }}>
        <MenuMobile />
      </Box>
    </Box>
  );
};

export default Navbar;
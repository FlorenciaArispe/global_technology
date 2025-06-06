import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Divider,
  Button,
  Collapse,
  useDisclosure,
  IconButton,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiShoppingCart, FiTrash2, FiMinus, FiPlus, FiChevronDown, FiTruck, FiMapPin, FiPackage } from "react-icons/fi";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

// const mockCart = [];
const mockCart = [
  {
    id: 1,
    name: "iPhone 16",
    capacity: "128GB",
    description: "Negro espacial",
    quantity: 1,
    price: 1200,
    image: "/images/iphone_mock.png",
  },
  {
    id: 2,
    name: "iPhone 16",
    capacity: "128GB",
    description: "Negro espacial",
    quantity: 1,
    price: 1200,
    image: "/images/iphone_mock.png",
  },
];

const Navbar = () => {
    const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [searchVisible, setSearchVisible] = useState(false); 

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
  };


  return (
  <Box
      as="nav"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      position="sticky"
      top={0}
      zIndex={10}
      bg="white"
      p={2}
    >
        <Flex justify="space-between" align="center">
{isMobile && (
    <MenuMobile />
          // <IconButton
          //   aria-label="Abrir menú"
          //   icon={<HamburgerIcon />}
          //   variant="ghost"
          //   color="black"
          //   fontSize="24px"
          //   _hover={{
          //     backgroundColor: "transparent",
          //     border: "1px solid white",
          //   }}
          // />
        )}

        <Image
          ml={isMobile ? 0 : 10}
          w={isMobile ? "50px" : "100px"}
          src="/images/solo-logo.png"
          alt="Global Technology"
          mx={isMobile ? "auto" : "unset"}
        />

         {!isMobile && (
          <Flex>
            <Button
              variant="ghost"
              color="black"
              mr={4}
              _hover={{
                outline: "1px solid black", 
                backgroundColor: "transparent",
              }}
            >
              Inicio
            </Button>
            <Button
              variant="ghost"
              color="black"
              mr={4}
              _hover={{
                outline: "1px solid black",
                backgroundColor: "transparent",
              }}
            >
              Quiénes somos
            </Button>
            <Button
              variant="ghost"
              color="black"
              mr={4}
              _hover={{
                outline: "1px solid black",
                backgroundColor: "transparent",
              }}
            >
              Contacto
            </Button>
          </Flex>
        )}

        {/* Lupa para abrir el campo de búsqueda */}
        <IconButton
          aria-label="Buscar"
          icon={<SearchIcon />}
          variant="ghost"
          color="black.800"
          fontSize="23px"
          onClick={toggleSearch}
          _hover={{
            backgroundColor: "transparent",
            border: "1px solid white",
          }}
        />

        {/* Campo de búsqueda, solo visible cuando searchVisible es true */}
        {searchVisible && (
          <Input
            placeholder="Buscar productos..."
            size="sm"
            variant="flushed"
            focusBorderColor="blue.400"
            w="full" // Hace que ocupe todo el ancho
            ml={4} // Espacio a la izquierda
          />
        )}

        </Flex>


      {/* <Image
        src="/images/COMPLETO-Negro.svg"
        alt="Logo completo"
        height="35px"
        ml={1}
        display={{ base: "none", md: "block" }}
      /> */}

      {/* <Flex
        gap={6}
        align="center"
        display={{ base: "none", md: "flex" }}
        ml="auto"
        mr={4}
      >
        <Text cursor="pointer">Productos</Text>
        <Text cursor="pointer">iPhone 16</Text>
        <Icon as={FiShoppingCart} boxSize={5} cursor="pointer" onClick={openCart} />
      </Flex> */}

    </Box>


  );
};

export default Navbar;
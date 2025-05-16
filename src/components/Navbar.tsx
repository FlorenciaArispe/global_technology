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
} from "@chakra-ui/react";
import { FiShoppingCart, FiTrash2, FiMinus, FiPlus, FiChevronDown, FiTruck, FiMapPin, FiPackage } from "react-icons/fi";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const {
    isOpen: isCartOpen,
    onOpen: openCart,
    onClose: closeCart,
  } = useDisclosure();
  const [cart, setCart] = useState(mockCart);
  const {
    isOpen: isPickupOpen,
    onToggle: togglePickup,
  } = useDisclosure();
  const {
    isOpen: isShippingOpen,
    onToggle: toggleShipping,
  } = useDisclosure();

  const subtotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const changeQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

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
      bg="#efebe5"
      h="60px"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Box display={{ base: "block", md: "none" }}>
        <Image src="/images/logo_con_fondo.png" alt="Logo" height="50px" />
      </Box>

      <Image
        src="/images/COMPLETO-Negro.svg"
        alt="Logo completo"
        height="35px"
        ml={1}
        display={{ base: "none", md: "block" }}
      />

      <Flex
        gap={6}
        align="center"
        display={{ base: "none", md: "flex" }}
        ml="auto"
        mr={4}
      >
        <Text cursor="pointer">Productos</Text>
        <Text cursor="pointer">iPhone 16</Text>
        <Icon as={FiShoppingCart} boxSize={5} cursor="pointer" onClick={openCart} />
      </Flex>

      <Flex display={{ base: "flex", md: "none" }} alignItems="center" gap={4}>
        <Icon as={FiShoppingCart} boxSize={5} cursor="pointer" onClick={openCart} />
        <MenuMobile />
      </Flex>

      <Drawer isOpen={isCartOpen} placement="right" onClose={closeCart} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito de compras</DrawerHeader>
          <DrawerBody>
   

            {cart.length === 0 ? (
              <Flex direction="column" align="center" justify="center" mt={12}>
                <Icon as={FiPackage} boxSize={12} color="gray.400" mb={4} />
                <Text fontSize="lg" color="gray.600">Tu carrito está vacío</Text>
              </Flex>
            ) : (
              <>
                {cart.map((item) => (
                  <Box key={item.id} mb={6}>
                    <Flex>
                      <Image src={item.image} alt={item.name} boxSize="80px" mr={4} />
                      <Box flex="1">
                        <Flex justify="space-between" align="flex-start">
                          <Box>
                            <Text fontWeight="bold">{item.name} - {item.capacity}</Text>
                            <Text fontSize="sm" color="gray.600">{item.description}</Text>
                          </Box>
                          <IconButton
                            icon={<FiTrash2 />}
                            aria-label="Eliminar"
                            size="sm"
                            variant="ghost"
                            onClick={() => removeItem(item.id)}
                          />
                        </Flex>
                        <Flex mt={2} align="center" gap={2}>
                          <IconButton icon={<FiMinus />} size="sm" onClick={() => changeQuantity(item.id, -1)} />
                          <Box px={3} py={1} border="1px solid #ccc" borderRadius="md">{item.quantity}</Box>
                          <IconButton icon={<FiPlus />} size="sm" onClick={() => changeQuantity(item.id, 1)} />
                        </Flex>
                        <Text mt={2} textAlign="right" fontWeight="semibold">
                          ${item.price * item.quantity}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                ))}
                
 <Text fontWeight="bold" mb={2}>Subtotal: ${subtotal}</Text>
                <Divider my={4} />
               

                <Box mb={4} cursor="pointer" onClick={togglePickup}>
                  <Flex align="center" justify="space-between">
                    <Flex align="center" gap={2}>
                      <Icon as={FiMapPin} />
                      <Text fontWeight="medium">Nuestros locales para retirar</Text>
                    </Flex>
                    <Icon as={FiChevronDown} />
                  </Flex>
                  <Collapse in={isPickupOpen} animateOpacity>
                    <Box mt={2} pl={6}>
                      <Text>📍 Bahía Blanca, Buenos Aires</Text>
                      <Text>📍 CABA, Capital Federal</Text>
                    </Box>
                  </Collapse>
                </Box>

                <Box mb={4} cursor="pointer" onClick={toggleShipping}>
                  <Flex align="center" justify="space-between">
                    <Flex align="center" gap={2}>
                      <Icon as={FiTruck} />
                      <Text fontWeight="medium">Medios de envío</Text>
                    </Flex>
                    <Icon as={FiChevronDown} />
                  </Flex>
                  <Collapse in={isShippingOpen} animateOpacity>
                    <Box mt={2} pl={6}>
                      <Text>A coordinar con el vendedor al finalizar la compra.</Text>
                    </Box>
                  </Collapse>
                </Box>

                <Text fontWeight="bold" mt={4}>Total: ${subtotal}</Text>
                <Button
  colorScheme="blue"
  w="100%"
  mt={4}
  onClick={() => {
                  navigate('/carrito');
                  closeCart();
                }}
>
  Iniciar compra
</Button>
                <Button variant="outline" w="100%" mt={2}   onClick={() => {
                  navigate('/productos');
                  closeCart();
                }}>Seguir comprando</Button>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
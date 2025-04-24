import {
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

export const MenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Botón hamburguesa */}
      <IconButton
        icon={<FiMenu />}
        variant="ghost"
        aria-label="Abrir menú"
        onClick={onOpen}
        display={{ base: "block", md: "none" }} // solo en mobile
        fontSize="24px"
      />

      {/* Drawer con transición suave */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* Botón cerrar */}
          <DrawerCloseButton fontSize="18px" mt={1} mr={2} />

          <DrawerBody>
            <VStack spacing={6} mt={10} align="start">
              <Text fontSize="lg">Productos</Text>
              <Text fontSize="lg">Iniciar sesión</Text>
              <Text fontSize="lg">Mis pedidos</Text>
              {/* Agregá más ítems acá */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

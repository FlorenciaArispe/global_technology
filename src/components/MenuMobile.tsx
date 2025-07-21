import {
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const MenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <IconButton
        icon={<FiMenu />}
        variant="ghost"
        aria-label="Abrir menú"
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
        fontSize="24px"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton fontSize="18px" mt={1} mr={2} />

          <DrawerBody>
            <VStack spacing={3} mt={10} align="start">
              <Button
                variant="ghost"
                color="black"
                onClick={() => {
                  navigate('/');
                  onClose();
                }}
              >
                Inicio
              </Button>
              <Button
                variant="ghost"
                color="black"
                onClick={() => {
                  navigate('/productos');
                  onClose();
                }}
              >
                Productos
              </Button>

              <Button
                variant="ghost"
                color="black"
                fontWeight="normal"
                onClick={() => {
                  navigate('/productos?categoria=1');
                  onClose();
                }}
              >
                Sellados
              </Button>
              <Button
                variant="ghost"
                color="black"
                fontWeight="normal"
                onClick={() => {
                  navigate('/productos?categoria=2');
                  onClose();
                }}
              >
                Usados
              </Button>

              <Button
                variant="ghost"
                color="black"
                fontWeight="normal"
                onClick={() => {
                  navigate('/productos?categoria=3');
                  onClose();
                }}
              >
                Accesorios
              </Button>

              <Button
                variant="ghost"
                color="black"
                onClick={() => {
                  navigate('/plan-canje');
                  onClose();
                }}
              >
                Plan Canje
              </Button>


              <Button
                variant="ghost"
                color="black"
                onClick={() => {
                  navigate('/contacto');
                  onClose();
                }}
              >
                Contacto
              </Button>

            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

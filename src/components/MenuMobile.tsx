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
        placement="right"
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton fontSize="18px" mt={1} mr={2} />

          <DrawerBody>
            <VStack spacing={6} mt={10} align="start">
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
  onClick={() => {
    {/*  navigate('/productos'); */}
    onClose(); 
  }}
>
  Pedidos
</Button>
       
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

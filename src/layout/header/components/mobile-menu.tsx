import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  WrapItem,
  useDisclosure,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';

import LeftNavBar from '@/layout/navbar-layout/components/left-navbar';

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };
  return (
    <Box>
      <Button px="0" onClick={() => handleClick()}>
        <WrapItem className="bg-gray-500 p-2 rounded-full">
          <BiMenu className="text-md lg:text-xl text-white" />
        </WrapItem>
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="full" placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <LeftNavBar />
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;

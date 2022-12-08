import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={4}
        left={4}
        colorScheme={'purple'}
        w={10}
        p={0}
        zIndex={"overlay"}
        borderRadius={'50%'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={20} />
      </Button>

      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader margin="0 auto">
            <b>VEDIO HUB</b>
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'} onClick={onClose}>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to={'/vedios'}>Vedios</Link>
              </Button>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to={'/vedios?category=free'}>Free Vedios</Link>
              </Button>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to={'/upload'}>Upload</Link>
              </Button>
            </VStack>
            <HStack
              width={'full'}
              pos={'absolute'}
              justifyContent={'space-evenly'}
              bottom={10}
              left={0}
            >
              <Button colorScheme={'purple'} onClick={onClose}>
                <Link to={"/login"}>Log In</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={"/signup"}>Sign up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

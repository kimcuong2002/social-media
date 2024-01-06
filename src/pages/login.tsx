import {
  Box,
  Button,
  Image,
  Modal,
  Text,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Divider,
} from '@chakra-ui/react';
import Lottie from 'lottie-react';

import { singInWithGoogle } from '../config/firebase/firebase';
import hello from '../lottie/hello.json';
import { icons, google } from '@/assets';
import { LoginForm, SignInForm } from '@/features';

export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="w-full h-screen flex justify-center items-center px-2">
      <Box className="flex justify-center items-center bg-white rounded-xl shadow-2xl p-2 border-4 w-full lg:w-5/6 xl:w-4/6">
        <Box className="hidden lg:block">
          <Lottie animationData={hello} />
          <Text className="text-center text-[#73114B] font-bold text-2xl">
            Turn your ideas into reality.
          </Text>
          <Text className="text-center text-[#73114B] font-bold text-sm">
            Start for free and get attractive offers from the community
          </Text>
        </Box>
        <Box className="flex w-full flex-col px-4 lg:px-20 lg:w-1/2">
          <Image src={icons} height="60px" width="60px" className="mb-8" />
          <Text className="text-[#525252] text-2xl !font-bold !text-left mb-4">
            Login to your account
          </Text>
          <Button
            colorScheme="teal"
            variant="outline"
            className="w-full"
            onClick={singInWithGoogle}
          >
            <Image src={google} className="w-6 h-6 mr-4" />
            Login With Google
          </Button>
          <Text className="my-4 text-[#A1A1A1] text-center" fontSize="xs">
            Or Sign in With Account
          </Text>
          <LoginForm />
          <Box className="flex mt-4 justify-center text-sm gap-1">
            <Text className="text-[#828282]">Not Registered Yet?</Text>
            <Text className="text-[#7F265B] cursor-pointer" onClick={onOpen}>
              Create an account
            </Text>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Sign Up</ModalHeader>
                <ModalCloseButton />
                <Divider />
                <ModalBody>
                  <SignInForm />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

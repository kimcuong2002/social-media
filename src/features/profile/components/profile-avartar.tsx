import { useState } from 'react';

import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiCamera } from 'react-icons/bi';
import { BsPersonAdd } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';

import {
  useSendReqFriend,
  useUpdateProfile,
} from '../hooks/use-update-profile';
import { Upload } from '@/components';
import { useQueryInfoUser } from '@/features/auth';
import { useGetUserById } from '@/features/user/hooks/use-user-query';
import { useParams } from 'react-router-dom';

export const ProfileAvatar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState([]);
  const [update] = useUpdateProfile();
  const param = useParams();
  const { data: authorData, refetch } = useQueryInfoUser();
  const { data: userData } = useGetUserById(param.id!);

  const [sendReqFriend] = useSendReqFriend();

  const { handleSubmit } = useForm();

  const updateAvatar = () => {
    if (value.length > 0) {
      void update({
        variables: {
          body: {
            avatar: value[0],
          },
          id: authorData?.getInfoUser.id,
        },
        onCompleted: async () => {
          toast.success('Update profile is successfully!');
          onClose();
          await refetch();
        },
        onError: (error) => {
          toast.error(error.message);
        },
      });
    }
  };

  const handleSendReqFriend = () => {
    void sendReqFriend({
      variables: {
        idFriend: param.id,
      },
      onCompleted: async () => {
        toast.success('Send request is successfully!');
        await refetch();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Box className="bg-white flex flex-col justify-center items-center w-full py-4 rounded-lg border-2 mt-4">
      <Box className="relative">
        {userData?.getUserById.avatar ? (
          <Avatar src={userData?.getUserById.avatar} size="2xl" />
        ) : (
          <Avatar src="" size="2xl" />
        )}
        <BiCamera
          className="cursor-pointer bg-gray-300 p-1 text-2xl rounded-full absolute bottom-0 right-0 -translate-x-1/2 -translate-y-1/2"
          onClick={onOpen}
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Change your avatar</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit(updateAvatar)}>
                <Upload
                  typeUpload="avatar"
                  onChange={(data) => setValue(data as [])}
                />
                <Input
                  type="submit"
                  className="my-4 mb-2 cursor-pointer !bg-green-500"
                />
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
      <Text className="font-bold mt-5" fontSize={{ base: 'md', lg: 'lg' }}>
        {userData?.getUserById.fullname}
      </Text>
      <Text className="text-gray-500 mt-2 mb-4" fontSize="sm">
        {userData?.getUserById.description}
      </Text>
      {authorData?.getInfoUser.id === param.id ? (
        ''
      ) : (
        <Box className="flex gap-4">
          <Button
            leftIcon={<BsPersonAdd />}
            variant="solid"
            size={{ base: 'xs', lg: 'md' }}
            className="!bg-[#3182CE] !text-[#eff3f7]"
            onClick={handleSendReqFriend}
          >
            Add Friend
          </Button>
          <IconButton
            aria-label="Add to friends"
            icon={<FaFacebookMessenger />}
            size={{ base: 'xs', lg: 'md' }}
          />
        </Box>
      )}
    </Box>
  );
};

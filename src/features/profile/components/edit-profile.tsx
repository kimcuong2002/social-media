import { useMemo, useState } from 'react';

import { Box, useDisclosure, Text, Divider, Input } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import EditBio from './edit-bio';
import EditImage from './edit-image';
import EditInformation from './edit-information';
import { useUpdateProfile } from '../hooks/use-update-profile';
import { UpdateInput } from '../service/type';
import { useQueryInfoUser } from '@/features/auth';
import { UserType } from '@/features/user';

const defaultValue = {
  fullname: '',
  address: '',
  university: '',
  company: '',
  email: '',
  phone: '',
  description: '',
};

export const EditProfile = () => {
  const [user, setUser] = useState<UserType>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useQueryInfoUser();
  useMemo(() => {
    if (data) {
      setUser(data?.getInfoUser);
    }
  }, [data]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateInput>({ defaultValues: defaultValue });

  const [update, { loading }] = useUpdateProfile();

  const onSubmit: SubmitHandler<UpdateInput> = (data) => {
    void update({
      variables: {
        body: {
          ...data,
        },
        id: user?.id,
      },
      onCompleted: () => {
        toast.success('Update profile is successfully!');
        onClose();
        reset();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Box>
      <Text
        onClick={onOpen}
        className="text-green-900 font-bold cursor-pointer"
      >
        View Details
      </Text>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Details</ModalHeader>
          <ModalCloseButton />
          <ModalHeader className="text-gray-500 !text-sm !pt-0">
            Provide details about yourself and any other pertinent information.
          </ModalHeader>
          <Divider />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Box className="flex gap-4">
                <Box className="w-1/2 flex flex-col gap-4">
                  <EditImage user={user} />
                  <EditBio
                    user={user}
                    control={control}
                    errors={errors}
                    disable={loading}
                  />
                </Box>
                <Box className="w-1/2">
                  <EditInformation
                    user={user}
                    control={control}
                    errors={errors}
                    disable={loading}
                  />
                </Box>
              </Box>
            </ModalBody>
            <Divider />
            <Input type="submit" className="cursor-pointer" />
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};
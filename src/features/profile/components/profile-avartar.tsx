import { ChangeEvent, useState } from 'react';

import { Avatar, Box, Button, IconButton, Input, Text } from '@chakra-ui/react';
import { BiCamera } from 'react-icons/bi';
import { BsPersonAdd } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';

type Props = {
  avatarLink?: string;
};

const ProfileAvatar = ({ avatarLink }: Props) => {
  const [avatar, setAvartar] = useState<string>(avatarLink ? avatarLink : '');

  const handlePreviewAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        setAvartar(URL.createObjectURL(file));
      } else {
        setAvartar('');
      }
    }
  };

  return (
    <Box className="bg-white flex flex-col justify-center items-center w-full py-4 rounded-lg border-2 mt-4">
      <Box className="relative">
        {avatar ? <Avatar src={avatar} size="2xl" /> : <Avatar size="2xl" />}
        <label htmlFor="avatar">
          <BiCamera className="cursor-pointer bg-gray-300 p-1 text-2xl rounded-full absolute bottom-0 right-0 -translate-x-1/2 -translate-y-1/2" />
        </label>
        <Input
          type="file"
          className="hidden"
          id="avatar"
          name="avatar"
          accept="image/*"
          onChange={(e) => handlePreviewAvatar(e)}
        />
      </Box>
      <Text className="font-bold mt-5" fontSize="xl">
        Kim Cuong
      </Text>
      <Text className="text-gray-500 mt-2 mb-4" fontSize="sm">
        Code | Eat | Sleep
      </Text>
      <Box className="flex gap-4">
        <Button
          leftIcon={<BsPersonAdd />}
          colorScheme="teal"
          variant="solid"
          size={{ base: 'xs', lg: 'md' }}
        >
          Add Friend
        </Button>
        <IconButton
          aria-label="Add to friends"
          icon={<FaFacebookMessenger />}
          size={{ base: 'xs', lg: 'md' }}
        />
      </Box>
    </Box>
  );
};

export default ProfileAvatar;

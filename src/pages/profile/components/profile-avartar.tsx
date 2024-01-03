import { Avatar, Box, Button, IconButton, Text } from '@chakra-ui/react';
import { BsPersonAdd } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';

import { avatar1 } from '@/assets';

const ProfileAvatar = () => {
  return (
    <Box className="bg-white flex flex-col justify-center items-center w-full py-4 rounded-lg border-2 mt-4">
      <Avatar src={avatar1} size="2xl" />
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

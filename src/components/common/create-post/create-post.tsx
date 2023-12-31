import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Text,
} from '@chakra-ui/react';

import { optionInput } from '../constant';
import { avatar1 } from '@/assets';

export const CreatePost = () => {
  const options = optionInput.slice(0, 4);
  return (
    <Box className="bg-white mt-4 p-4 rounded-lg border-2">
      <Box className="flex items-center gap-4">
        <Avatar src={avatar1} />
        <Text className="text-gray-500">Share something...</Text>
      </Box>
      <Divider className="my-4" />
      <Box className="flex justify-between items-center">
        <Box className="flex gap-1 text-2xl text-gray-400 cursor-pointer">
          {options.map((item) => (
            <IconButton
              aria-label="Search database"
              icon={item.icon}
              key={item.id}
              variant="ghost"
            />
          ))}
        </Box>
        <Button colorScheme="twitter" size="sm">
          Post
        </Button>
      </Box>
    </Box>
  );
};

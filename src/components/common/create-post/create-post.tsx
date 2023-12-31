import { Avatar, Box, Button, Divider, Text } from '@chakra-ui/react';
import { BiFile, BiImage, BiSmile, BiVideo } from 'react-icons/bi';

import { avatar1 } from '@/assets';

const optionUpload = [
  { icon: <BiVideo />, id: 1 },
  { icon: <BiSmile />, id: 2 },
  { icon: <BiImage />, id: 3 },
  { icon: <BiFile />, id: 4 },
];

export const CreatePost = () => {
  return (
    <Box className="bg-white mt-4 p-4 rounded-lg border-2">
      <Box className="flex items-center gap-4">
        <Avatar src={avatar1} />
        <Text className="text-gray-500">Share something...</Text>
      </Box>
      <Divider className="my-4" />
      <Box className="flex justify-between items-center">
        <Box className="flex gap-4 text-2xl text-gray-400 cursor-pointer">
          {optionUpload.map((item) => (
            <Box key={item.id}>{item.icon}</Box>
          ))}
        </Box>
        <Button colorScheme="twitter" size="sm">
          Post
        </Button>
      </Box>
    </Box>
  );
};

import { Avatar, Box, Divider, Text } from '@chakra-ui/react';
import { IoCall, IoVideocam } from 'react-icons/io5';
import { GoDotFill } from 'react-icons/go';
import { InputMessage } from './input-message';

export const ContactDetail = () => {
  return (
    <Box className="p-4">
      <Box className="flex justify-between items-center">
        <Box className="flex justify-center items-center gap-2">
          <Avatar />
          <>
            <Text className="font-bold">Name</Text>
            <Box className="flex gap-1 items-center">
              <GoDotFill className="!text-green-700" />
              <Text className="text-[#707070]">Online</Text>
            </Box>
          </>
        </Box>
        <Box className="flex gap-4 justify-center items-center text-2xl">
          <IoCall className="cursor-pointer !text-[#0084FF]" />
          <IoVideocam className="cursor-pointer !text-[#0084FF]" />
        </Box>
      </Box>
      <Divider className="my-2" />
      <InputMessage />
    </Box>
  );
};

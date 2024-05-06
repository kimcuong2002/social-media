import { Contact } from '@/components';
import { datas } from '@/data';
import { Box, Divider, Input, Text } from '@chakra-ui/react';

export const MessageSideBar = () => {
  return (
    <>
      <Box className="flex justify-between items-center">
        <Text className="font-bold" fontSize="2xl">
          Messages
        </Text>
        <Text className="font-bold">12</Text>
      </Box>
      <Divider className="my-4" />
      <Input placeholder="search" className="!bg-[#F6F6FE]" />
      <Box className="h-[77vh] overflow-y-scroll no-scrollbar">
        {datas.map((item) => (
          <Contact
            name={item.name}
            thumb={item.thumb}
            key={item.id}
            state={item.state}
          />
        ))}
      </Box>
    </>
  );
};

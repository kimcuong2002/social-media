import { Avatar, Box, Divider, Text } from '@chakra-ui/react';
import { IoCall, IoVideocam } from 'react-icons/io5';
import { GoDotFill } from 'react-icons/go';
import { InputMessage } from './input-message';
import { useParams } from 'react-router-dom';
import { useGetAllMessage, useGetRoomById } from '@/features';
import { useQueryInfoUser } from '@/features/auth';

export const ContactDetail = () => {
  const param = useParams();
  const id = param.id;
  const { data } = useGetRoomById(id!);
  const { data: author } = useQueryInfoUser();
  const avatarContact = data?.getRoomById.members.filter(
    (member) => member.id !== author?.getInfoUser.id,
  );
  const nameContact = data?.getRoomById.members.filter(
    (member) => member.id !== author?.getInfoUser.id,
  );
  const { data: messages } = useGetAllMessage(id!);

  return (
    <Box className="p-4 relative h-[90vh]">
      <Box className="flex justify-between items-center">
        <Box className="flex justify-center items-center gap-2">
          {avatarContact?.map((member) => <Avatar src={member.avatar} />)}
          <>
            {nameContact?.map((member) => (
              <Text className="font-bold">{member.fullname}</Text>
            ))}
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
      <Divider className="my-2 !w-full" />
      <Box className="flex flex-col gap-4 h-[76vh] overflow-y-scroll no-scrollbar">
        {messages?.getAllMessage.map((message) => (
          <Box
            className={`flex gap-2 ${message.author.id === author?.getInfoUser.id ? 'justify-end' : ''}`}
            key={message.id}
          >
            {author?.getInfoUser.id !== message.author.id && (
              <Avatar src={message.author.avatar} />
            )}
            <Text
              className={`  text-xl p-2 rounded-3xl ${author?.getInfoUser.id === message.author.id ? 'bg-[#625EF1] text-white' : 'bg-[#d8d8d8] text-black'}`}
            >
              {message.content}
            </Text>
            {author?.getInfoUser.id === message.author.id && (
              <Avatar src={message.author.avatar} />
            )}
          </Box>
        ))}
      </Box>
      <InputMessage className="absolute bottom-0 w-11/12" idRoom={param.id!} />
    </Box>
  );
};

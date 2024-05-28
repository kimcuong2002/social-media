import { Avatar, Box, Divider, Image, Text } from '@chakra-ui/react';
import { IoCall, IoVideocam } from 'react-icons/io5';
import { GoDotFill } from 'react-icons/go';
import { InputMessage } from './input-message';
import { Link, useParams } from 'react-router-dom';
import { useGetAllMessage, useGetRoomById, useQueryInfoUser } from '@/features';
import { useState } from 'react';
import { MessageType } from '../service/type';
import { io } from 'socket.io-client';

export const ContactDetail = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
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
  const { data: allMessages } = useGetAllMessage(id!);

  const socket = io(`http://localhost:8080`, {
    autoConnect: true,
  });

  socket.on('received_message', (message) => {
    let arr: MessageType[] = messages;
    if (message) {
      arr = [...arr, { ...message }];
    }
    setMessages([...arr]);
  });
  return (
    <Box className="flex">
      <Box className="p-4 relative h-[93vh] w-8/12 border">
        <Box className="flex justify-between items-center">
          <Box className="flex justify-center items-center gap-2">
            {avatarContact?.map((member) => (
              <Avatar src={member.avatar} key={member.id} />
            ))}
            <>
              {nameContact?.map((member) => (
                <Text className="font-bold" key={member.id}>
                  {member.fullname}
                </Text>
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
          {allMessages?.getAllMessage.map((message) => (
            <Box
              className={`flex gap-2 ${message.author.id === author?.getInfoUser.id ? 'justify-end' : ''}`}
              key={message.id}
            >
              {author?.getInfoUser.id !== message.author.id && (
                <Avatar src={message.author.avatar} />
              )}
              <Text
                className={`text-xl p-2 rounded-3xl  ${author?.getInfoUser.id === message.author.id ? 'bg-[#625EF1] text-white' : 'bg-[#d8d8d8] text-black'}`}
              >
                {message.content}
              </Text>
              {author?.getInfoUser.id === message.author.id && (
                <Avatar src={message.author.avatar} />
              )}
            </Box>
          ))}
        </Box>
        <InputMessage
          className="absolute bottom-0 w-11/12"
          idRoom={param.id!}
        />
      </Box>
      <Box className="w-4/12 p-4">
        <Text className="text-2xl font-bold">Directory</Text>
        <Divider className="mt-6" />
        <Text className="font-bold my-4">Members</Text>
        <Box className="ml-4 h-[30vh] overflow-y-scroll no-scrollbar">
          {data?.getRoomById.members.map((member) => (
            <Link key={member.id} to={`/profile/${member.id}`}>
              <Box className="flex gap-2 items-center my-2 cursor-pointer">
                <Image src={member.avatar} className="w-14 h-14 rounded-2xl" />
                <Text className="font-bold">{member.fullname}</Text>
              </Box>
            </Link>
          ))}
        </Box>
        <Divider />
        <Text className="font-bold my-4">Files</Text>
      </Box>
    </Box>
  );
};

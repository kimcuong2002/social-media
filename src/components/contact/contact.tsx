import { FC } from 'react';

import { Box, Text } from '@chakra-ui/react';
import { UserType } from '@/features/user';
import { Link } from 'react-router-dom';

export type ContactType = {
  idUser: string;
  id?: number;
  members: UserType[];
  name: string;
  state?: 'on' | 'off';
  idRoom?: string;
};

export const Contact: FC<ContactType> = ({
  idUser,
  members,
  name,
  state = 'on',
  idRoom,
}) => {
  const userChat = members.filter((member) => member.id !== idUser);

  // console.log('🚀 ~ userChat:', userChat[0]);
  // const avatar = userChat[0].avatar;
  // console.log('🚀 ~ avatar:', avatar);
  // // console.log(members);

  return (
    <Link to={`/message/${idRoom}`}>
      <Box className="flex justify-start items-center gap-4 my-3 cursor-pointer hover:bg-[#F6F6FE] p-2 rounded-lg ">
        {/* <Avatar src={avatar} size="sm">
        <AvatarBadge
          borderColor={state === 'off' ? 'papayawhip' : ''}
          bg={state === 'on' ? 'green.500' : 'tomato'}
          boxSize="1.25em"
        />
      </Avatar> */}
        <Text fontSize="sm" className="font-bold">
          {name}
        </Text>
      </Box>
    </Link>
  );
};

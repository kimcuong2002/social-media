import { FC } from 'react';

import { Avatar, AvatarBadge, Box, Text } from '@chakra-ui/react';
import { UserType } from '@/features/user';
import { Link } from 'react-router-dom';
import { useQueryInfoUser } from '@/features';

export type ContactType = {
  idUser: string;
  id?: number;
  members: UserType[];
  state?: 'on' | 'off';
  idRoom?: string;
};

export const Contact: FC<ContactType> = ({ members, idRoom, state = 'on' }) => {
  const { data: authorData } = useQueryInfoUser();
  const listName = members.filter(
    (item) => item.id !== authorData?.getInfoUser.id,
  );
  return (
    <Link to={`/message/${idRoom}`}>
      <Box className="flex justify-start items-center gap-4 my-3 cursor-pointer hover:bg-[#F6F6FE] p-2 rounded-lg ">
        <Avatar src={listName[0].avatar} size="sm">
          <AvatarBadge
            borderColor={state === 'off' ? 'papayawhip' : ''}
            bg={state === 'on' ? 'green.500' : 'tomato'}
            boxSize="1.25em"
          />
        </Avatar>
        <Text fontSize="sm" className="font-bold">
          {listName[0].fullname}
        </Text>
      </Box>
    </Link>
  );
};

import { Box, Divider, IconButton, Text } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';

import { Contact } from '@/components';
import { useGetAllRoom, useQueryInfoUser } from '@/features';

type Props = {
  className?: string;
};

export const RightNavBar = ({ className }: Props) => {
  const { data: userData } = useQueryInfoUser();
  const { data } = useGetAllRoom(userData?.getInfoUser.id!);
  const totalRoom = data?.getAllRoom.length;

  return (
    <Box className={`bg-white p-4 w-2/12 hidden xl:block ${className}`}>
      <Box className="flex justify-between rooms-center">
        <Text className="font-bold">Contact</Text>
        <IconButton
          aria-label="Search database"
          icon={<LuSearch />}
          size="sm"
        />
      </Box>
      <Divider className="my-4" />
      <Text fontSize="sm" className="text-gray-500">
        Online - {totalRoom}
      </Text>
      <Box className=" overflow-y-scroll no-scrollbar">
        {data?.getAllRoom.map((room) => (
          <Contact
            key={room.id}
            name={room.name}
            members={room.members}
            idUser={userData?.getInfoUser.id!}
            idRoom={room.id}
          />
        ))}
      </Box>
    </Box>
  );
};

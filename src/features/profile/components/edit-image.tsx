import { FC } from 'react';

import { Box, Image, Text, Avatar, Button } from '@chakra-ui/react';

import { anhbia } from '@/assets';
import { UserType } from '@/features/user';

type Props = {
  user: UserType | undefined;
};

const EditImage: FC<Props> = ({ user }) => {
  return (
    <Box className="w-full bg-gray-100 pb-4 rounded-xl">
      <Box className="w-full">
        <Box className="overflow-hidden">
          <Image src={anhbia} alt="Image" className="mb-[-10%] rounded-t-xl" />
        </Box>
        <Avatar
          src={user?.avatar}
          size="xl"
          className="absolute bottom-0 left-4 -translate-y-1/2"
        />
      </Box>
      <Box className="ml-4">
        <Text className="font-bold">Your Photo</Text>
        <Text>This will be displayed on your profile</Text>
      </Box>
      <Box className="ml-4">
        <Button colorScheme="blue" size="sm">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default EditImage;

import { Avatar, Text, Box } from '@chakra-ui/react';
import { TiArrowSortedDown } from 'react-icons/ti';

const Profile = () => {
  return (
    <Box className="flex justify-between items-center gap-2">
      <Avatar
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        className="!w-10 !h-10"
      />
      <Text className="text-white">Kim Cuong</Text>
      <TiArrowSortedDown />
    </Box>
  );
};

export default Profile;

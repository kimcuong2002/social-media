import { Box } from '@chakra-ui/react';

import Navbar from './components/navbar';
import { anhbia } from '@/assets';

export const Profile = () => {
  return (
    <Box>
      <img src={anhbia} alt="" className="w-full h-96 bg-cover" />
      <Navbar />
    </Box>
  );
};

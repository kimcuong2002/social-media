import { Avatar, Box, Text } from '@chakra-ui/react';

import { facebook_logo } from '@/assets';

const Logo = () => {
  return (
    <Box className="flex justify-center items-center gap-4 cursor-pointer">
      <Avatar src={facebook_logo} className="!w-10 !h-10" />
      <Text fontSize="lg">Facebook</Text>
    </Box>
  );
};

export default Logo;

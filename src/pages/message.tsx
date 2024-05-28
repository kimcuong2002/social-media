import { Box } from '@chakra-ui/react';

import { ContactDetail, MessageSideBar } from '@/features';
import LeftNavBar from '@/layout/navbar-layout/components/left-navbar';

export const Message = () => {
  return (
    <Box className="flex">
      <LeftNavBar>
        <MessageSideBar />
      </LeftNavBar>
      <Box className="w-full">
        <ContactDetail />
      </Box>
    </Box>
  );
};

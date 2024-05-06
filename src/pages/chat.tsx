import { MessageSideBar } from '@/features';
import { ContactDetail } from '@/features/message/components/contact-detail';
import LeftNavBar from '@/layout/navbar-layout/components/left-navbar';
import { Box } from '@chakra-ui/react';

export const Chat = () => {
  return (
    <Box className="flex">
      <LeftNavBar children={<MessageSideBar />} />
      <Box className="w-6/12">
        <ContactDetail />
      </Box>
      <Box className="w-3/12 bg-red-500"></Box>
    </Box>
  );
};

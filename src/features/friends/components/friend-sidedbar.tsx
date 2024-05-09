import { Box } from '@chakra-ui/react';
import { BiGroup } from 'react-icons/bi';
import { IoMenuOutline, IoPersonAddOutline } from 'react-icons/io5';

import { SideBarButton } from '@/components';

const friendsSideBar = [
  {
    name: 'Home',
    icon: <IoMenuOutline />,
  },
  {
    name: 'Friends request',
    icon: <IoPersonAddOutline />,
  },
  {
    name: 'All Friends',
    icon: <BiGroup />,
  },
];

export const FriendSideBar = () => {
  return (
    <Box className="flex flex-col gap-2">
      {friendsSideBar.map((item) => (
        <SideBarButton
          key={item.name}
          buttonIcon={item.icon}
          buttonName={item.name}
        />
      ))}
    </Box>
  );
};

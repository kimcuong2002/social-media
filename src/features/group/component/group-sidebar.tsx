import { Box, Text, Divider } from '@chakra-ui/react';
import { BiNotification } from 'react-icons/bi';
import { MdOutlineEventBusy } from 'react-icons/md';
import { RiCompassDiscoverLine } from 'react-icons/ri';

import { SideBarButton } from '@/components';
import CreateGroup from './create-group';

const eventSideBar = [
  {
    name: 'Group Feeds',
    icon: <RiCompassDiscoverLine />,
  },
  {
    name: 'Discover Group',
    icon: <MdOutlineEventBusy />,
  },
  {
    name: 'Notifcations',
    icon: <BiNotification />,
  },
];

export const GroupSideBar = () => {
  return (
    <>
      <Text className="font-bold" fontSize="2xl">
        Event
      </Text>
      <Divider className="my-4" />
      <Box className="flex flex-col">
        {eventSideBar.map((item) => (
          <SideBarButton
            key={item.name}
            buttonIcon={item.icon}
            buttonName={item.name}
          />
        ))}
        <CreateGroup />
      </Box>
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        Your group created
      </Text>
      <Text className="font-bold cursor-pointer">Danang . 20km</Text>
      <Divider className="my-4" />
    </>
  );
};

import { Box, Button, Text } from '@chakra-ui/react';
import { LuLogOut } from 'react-icons/lu';
import { RiProfileLine } from 'react-icons/ri';
import { RiSettings4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const profileOptions = [
  {
    icon: <RiProfileLine />,
    name: 'View Profile',
    link: '/profile',
  },
  {
    icon: <RiSettings4Line />,
    name: 'Profile Setting',
    link: '/profile-setting',
  },
  {
    icon: <LuLogOut />,
    name: 'Log Out',
  },
];

export const ProfileOptions = () => {
  return (
    <Box>
      {profileOptions.map((item) => (
        <Link key={item.name} to={item.link as string}>
          <Button className="flex !justify-start items-center gap-4 w-full my-1">
            <Box>{item.icon}</Box>
            <Text>{item.name}</Text>
          </Button>
        </Link>
      ))}
    </Box>
  );
};

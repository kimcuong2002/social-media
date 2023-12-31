import { FC, ReactNode } from 'react';

import { Box, Button } from '@chakra-ui/react';
import {
  BiCalendar,
  BiCart,
  BiGroup,
  BiHome,
  BiMessage,
  BiVideo,
} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const leftNavBar = [
  {
    icon: <BiHome />,
    link: '/',
  },
  {
    icon: <BiGroup />,
    link: '/group',
  },
  {
    icon: <BiCart />,
    link: '/cart',
  },
  {
    icon: <BiMessage />,
    link: '/message',
  },
  {
    icon: <BiVideo />,
    link: '/call',
  },
  {
    icon: <BiCalendar />,
    link: '/calendar',
  },
];

type Props = {
  children: ReactNode;
};

const LeftNavBar: FC<Props> = ({ children }) => {
  return (
    <Box className="gap-1 w-3/12 hidden lg:flex">
      <Box className="flex flex-col gap-2 bg-white p-2">
        {leftNavBar.map((item) => (
          <Link to={item.link} key={item.link}>
            <Button variant="ghost" fontSize="xl">
              {item.icon}
            </Button>
          </Link>
        ))}
      </Box>
      <Box className="bg-white p-4 w-full">{children}</Box>
    </Box>
  );
};

export default LeftNavBar;

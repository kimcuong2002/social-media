import { FC, ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

import LeftNavBar from './components/left-navbar';
import RightNavBar from './components/right-navbar/right-navbar';

type Props = {
  children: ReactNode;
  navBarChildren: ReactNode;
};

const NavbarLayout: FC<Props> = ({ children, navBarChildren }) => {
  return (
    <Box className="flex justify-between">
      <LeftNavBar>{navBarChildren}</LeftNavBar>
      <Box className="mx-2 md:mx-10 w-full lg:w-6/12 flex flex-col overflow-y-auto h-[100vh] no-scrollbar">
        {children}
      </Box>
      <RightNavBar />
    </Box>
  );
};

export default NavbarLayout;

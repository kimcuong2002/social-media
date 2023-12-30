import { Box } from '@chakra-ui/react';

import SideBar from './components/sidebar';
import NavbarLayout from '@/layout/navbar-layout';

export const Home = () => {
  return (
    <NavbarLayout
      navBarChildren={
        <Box>
          <SideBar />
        </Box>
      }
    >
      Home
    </NavbarLayout>
  );
};

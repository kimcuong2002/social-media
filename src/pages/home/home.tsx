import { Box } from '@chakra-ui/react';

import SideBar from './components/sidebar';
import { CreatePost } from '@/components';
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
      <CreatePost />
    </NavbarLayout>
  );
};

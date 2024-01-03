import { Box, Image } from '@chakra-ui/react';

import Information from './components/information';
import ListFriend from './components/list-friend';
import ListPhoto from './components/list-photo';
import Navbar from './components/navbar';
import ProfileAvatar from './components/profile-avartar';
import { anhbia } from '@/assets';
import { CreatePost, Post } from '@/components';

export const Profile = () => {
  return (
    <Box className="">
      <Box className="relative">
        <Image src={anhbia} alt="" className="w-full h-96 bg-cover" />
        <Box className="hidden md:block">
          <Navbar />
        </Box>
      </Box>
      <Box className="flex w-full justify-center items-center absolute top-2/4">
        <Box className="flex flex-col gap-4 w-5/6 md:w-full md:flex-row md:mx-10 lg:w-5/6 xl:w-4/6">
          <Box className="w-full md:w-1/4 ">
            <ProfileAvatar />
            <Information />
            <ListPhoto />
            <ListFriend />
          </Box>
          <Box className="block md:hidden">
            <Navbar />
          </Box>
          <Box className="w-full md:w-3/4 md:mt-[220px]">
            <CreatePost />
            <Post />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

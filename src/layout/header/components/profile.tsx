import {
  Avatar,
  Text,
  Box,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { ProfileOptions } from '@/components';

type Usertype = {
  name: string;
  image: string;
  email: string;
};

const Profile = () => {
  const storedUser = localStorage.getItem('user');
  const user: Usertype | null = storedUser ? JSON.parse(storedUser) : null;
  return (
    <Popover>
      <PopoverTrigger>
        <Button className="!px-0">
          <Box className="flex justify-between items-center gap-2 cursor-pointer">
            <Avatar
              name="Dan Abrahmov"
              src={user.image}
              className="!w-8 !h-8 relative lg:!h-9 lg:!w-9"
            />
            <Text className="text-black hidden lg:block">{user.name}</Text>
            <MdKeyboardArrowDown className="hidden lg:block" />
            <MdKeyboardArrowDown className="block absolute bottom-0 right-0 -translate-x-1/2 -translate-y-1/2 lg:hidden " />
          </Box>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader className="font-bold">Profile</PopoverHeader>
        <PopoverBody>
          <ProfileOptions />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Profile;

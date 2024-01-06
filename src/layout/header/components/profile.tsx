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

import { ProfileOptions } from '../../../features/profile/components/profile-options';
import { avatar1 } from '@/assets';

const Profile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button className="!px-0">
          <Box className="flex justify-between items-center gap-2 cursor-pointer">
            <Avatar
              name="Dan Abrahmov"
              src={avatar1}
              className="!w-8 !h-8 relative lg:!h-9 lg:!w-9"
            />
            <Text className="text-black hidden lg:block">Kimcuong</Text>
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

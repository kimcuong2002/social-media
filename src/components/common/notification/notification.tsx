import {
  Avatar,
  Box,
  Button,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { TfiLayoutMenu } from 'react-icons/tfi';

import Menu from './component/menu';

export const NotificationBox = () => {
  return (
    <Box className="flex gap-2 py-2 px-2 rounded-md hover:bg-gray-200">
      <Avatar src="" />
      <Box>
        <Text>Nguyen Hoang Kim Cuong da gui cho ban mot loi moi ket ban</Text>
        <Text fontSize="xs">2 ngay truoc</Text>
      </Box>
      <Popover>
        <PopoverTrigger>
          <Button>
            <TfiLayoutMenu />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton />
          <PopoverBody>
            <Menu />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default NotificationBox;

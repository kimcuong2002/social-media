import { Box, Text } from '@chakra-ui/react';
import { FaRegClosedCaptioning } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';

const Menu = () => {
  return (
    <Box>
      <Box className="flex justify-start gap-1 items-center hover:bg-gray-200 p-2 rounded-md">
        <FaCheck />
        <Text>Đánh dấu là đã đọc</Text>
      </Box>
      <Box className="flex justify-start gap-1 items-center hover:bg-gray-200 p-2 rounded-md">
        <FaRegClosedCaptioning />
        <Text>Gỡ thông báo này</Text>
      </Box>
    </Box>
  );
};

export default Menu;

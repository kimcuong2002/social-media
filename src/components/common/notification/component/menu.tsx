import { Box, Button, Text } from '@chakra-ui/react';
import { FaRegWindowClose } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';

const menu = [
  {
    name: 'Check read',
    icon: <FaCheck />,
  },
  {
    name: 'Remove notification',
    icon: <FaRegWindowClose />,
  },
];

const Menu = () => {
  return (
    <Box>
      {menu.map((item) => (
        <Button
          key={item.name}
          className="flex !justify-start items-center gap-4 w-11/12 my-1"
        >
          <Box>{item.icon}</Box>
          <Text>{item.name}</Text>
        </Button>
      ))}
    </Box>
  );
};

export default Menu;

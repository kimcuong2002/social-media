import { Box, Button } from '@chakra-ui/react';

const navBarDatas = [
  {
    name: 'Post',
  },
  {
    name: 'About',
  },
  {
    name: 'Friends',
  },
  {
    name: 'Photo',
  },
  {
    name: 'Event',
  },
  {
    name: 'Other',
  },
];

const Navbar = () => {
  return (
    <Box className="w-full bg-white flex justify-center items-center gap-2 py-2">
      {navBarDatas.map((item) => (
        <Button key={item.name} colorScheme="teal" variant="ghost">
          {item.name}
        </Button>
      ))}
    </Box>
  );
};

export default Navbar;

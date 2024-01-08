import { Box, Button, Divider, Text } from '@chakra-ui/react';
import {
  BiCar,
  BiCart,
  BiCloudLightning,
  BiFile,
  BiHeart,
  BiMailSend,
  BiMusic,
  BiNotification,
  BiPencil,
  BiPlus,
  BiVideo,
} from 'react-icons/bi';
import { RxAvatar } from 'react-icons/rx';

const marketSidebarItem = [
  {
    name: 'Find all item',
    icon: <BiCart />,
  },
  {
    name: 'Notifications',
    icon: <BiNotification />,
  },
  {
    name: 'Inbox',
    icon: <BiMailSend />,
  },
  {
    name: 'My account',
    icon: <RxAvatar />,
  },
];
const categoriesItem = [
  {
    name: 'Vehicle',
    icon: <BiCar />,
  },
  {
    name: 'Office items',
    icon: <BiFile />,
  },
  {
    name: 'Music tool',
    icon: <BiMusic />,
  },
  {
    name: 'Electronic',
    icon: <BiCloudLightning />,
  },
  {
    name: 'Entertaiment',
    icon: <BiVideo />,
  },
  {
    name: 'School Items',
    icon: <BiPencil />,
  },
  {
    name: 'Family',
    icon: <BiHeart />,
  },
];

export const CartSideBar = () => {
  return (
    <Box>
      <Text className="font-bold mb-4" fontSize="2xl">
        Marketplace
      </Text>
      <Divider className="mb-4" />
      <Box className="flex flex-col">
        {marketSidebarItem.map((item) => (
          <button
            key={item.name}
            className="flex justify-start items-center gap-4 py-3 rounded-lg px-4 font-bold  hover:bg-slate-400 hover:text-white group"
          >
            <Box className="text-green-800 text-2xl group-hover:text-white">
              {item.icon}
            </Box>
            <Text>{item.name}</Text>
          </button>
        ))}
        <Button
          leftIcon={<BiPlus className="text-xl" />}
          colorScheme="facebook"
          className="my-2"
        >
          Sale Items
        </Button>
      </Box>
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        Filter
      </Text>
      <Text className="font-bold cursor-pointer">Danang . 20km</Text>

      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        All Categories
      </Text>
      <Box className="flex flex-col gap-4">
        {categoriesItem.map((item) => (
          <button
            key={item.name}
            className="flex items-center text-xl gap-4 px-4 py-2 rounded-md hover:bg-purple-600 hover:text-white"
          >
            <Box>{item.icon}</Box>
            <Text>{item.name}</Text>
          </button>
        ))}
      </Box>
    </Box>
  );
};

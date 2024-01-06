import { Box, Divider, Text } from '@chakra-ui/react';
import { FaRegHeart } from 'react-icons/fa';
import {
  MdOutlineAddHomeWork,
  MdOutlineBook,
  MdOutlineHome,
  MdOutlineTimer,
} from 'react-icons/md';

const informationData = [
  {
    icon: <MdOutlineHome />,
    name: 'Live in DaNang city',
  },
  {
    icon: <MdOutlineAddHomeWork />,
    name: 'Work in Google',
  },
  {
    icon: <MdOutlineBook />,
    name: 'Study at DongA university',
  },
  {
    icon: <FaRegHeart />,
    name: 'Single',
  },
  {
    icon: <MdOutlineTimer />,
    name: 'Joined at November 2020',
  },
];

const Information = () => {
  return (
    <Box className="bg-white mt-4 p-4 rounded-lg border-2">
      <Text className="font-bold">Information</Text>
      <Divider className="my-2" />
      <Box>
        {informationData.map((item) => (
          <Box key={item.name} className="flex items-center gap-2 mb-2">
            <Box className="text-xl">{item.icon}</Box>
            <Text className="text-gray-600">{item.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Information;

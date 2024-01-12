import { Box, Button, Divider, Text } from '@chakra-ui/react';
import { BiHome, BiVideo, BiSave, BiPlus } from 'react-icons/bi';

const videoOptions = [
  {
    name: 'Home',
    icon: <BiHome />,
  },
  {
    name: 'Live',
    icon: <BiVideo />,
  },
  {
    name: 'Saved Videos',
    icon: <BiSave />,
  },
];

export const VideoSideBar = () => {
  return (
    <Box className="h-screen">
      <Text className="font-bold mb-4" fontSize="2xl">
        Videos
      </Text>
      <Divider className="mb-4" />
      <Box className="flex flex-col">
        {videoOptions.map((item) => (
          <button
            key={item.name}
            className="flex justify-start items-center gap-4 py-3 rounded-lg px-4 font-bold hover:bg-slate-400 hover:text-white group"
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
          Create new Event
        </Button>
      </Box>
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        Followed
      </Text>
    </Box>
  );
};

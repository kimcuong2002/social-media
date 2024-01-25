import { Box, Divider, Text } from '@chakra-ui/react';

type Props = {
  informationUser: { icon: JSX.Element; name: string }[];
};

export const Information = ({ informationUser }: Props) => {
  return (
    <Box className="bg-white mt-4 p-4 rounded-lg border-2">
      <Text className="font-bold">Information</Text>
      <Divider className="my-2" />
      <Box>
        {informationUser?.map((item) => (
          <Box key={item.name} className="flex items-center gap-2 mb-2">
            <Box className="text-xl">{item.icon}</Box>
            <Text className="text-gray-600">{item.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

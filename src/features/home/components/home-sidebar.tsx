import { useMemo, useState } from 'react';

import { Avatar, Box, Image, Text } from '@chakra-ui/react';

import { Topic, useGetAllTopic, useQueryInfoUser } from '@/features';

export const HomeSideBar = () => {
  const [allTopics, setAllTopics] = useState<Topic[]>([]);

  const { data } = useQueryInfoUser();
  const { data: topics } = useGetAllTopic();

  useMemo(() => {
    if (topics) {
      setAllTopics(topics.topics);
    }
  }, [topics]);

  const userData = useMemo(() => {
    if (data) {
      const result = {
        name: data?.getInfoUser.fullname,
        avatar: data?.getInfoUser.avatar,
      };
      return result;
    }
    return null;
  }, [data]);
  return (
    <Box>
      <Box className="flex items-center gap-2">
        <Avatar src={userData?.avatar} size="sm" />
        <Text fontSize="sm" className="font-bold">
          {userData?.name}
        </Text>
      </Box>
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        popular topics
      </Text>
      {allTopics.map((item) => (
        <Box
          key={item.id}
          className={`flex gap-4 items-center my-6 cursor-pointer bg-${item.color}`}
        >
          <Image src={item.image} boxSize="50px" />
          <Text>{item.name}</Text>
        </Box>
      ))}
    </Box>
  );
};

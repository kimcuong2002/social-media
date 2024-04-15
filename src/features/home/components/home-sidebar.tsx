import { useMemo, useState } from 'react';

import { Avatar, Box, Image, Text } from '@chakra-ui/react';

import { Topic } from '@/features';
import { useQueryInfoUser } from '@/features/auth';
import { useGetAllTopic } from '@/features/topic';

const trends = [
  {
    name: 'Wash Hand',
    totalPost: 400,
  },
  {
    name: 'Phi Phai',
    totalPost: 260,
  },
  {
    name: 'Study',
    totalPost: 572,
  },
  {
    name: 'Code tools',
    totalPost: 832,
  },
  {
    name: 'Chill',
    totalPost: 382,
  },
];

export const HomeSideBar = () => {
  const sortTrends = trends.sort((a, b) => b.totalPost - a.totalPost);
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
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        Trend for you
      </Text>
      {sortTrends.map((item) => (
        <Box key={item.name} className="my-3">
          <Text className="font-bold" fontSize="sm">
            {item.name}
          </Text>
          <Text className="text-gray-500" fontSize="xs">
            {item.totalPost} Post
          </Text>
        </Box>
      ))}
    </Box>
  );
};

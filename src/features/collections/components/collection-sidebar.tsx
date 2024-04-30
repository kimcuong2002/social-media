import { Box, Text, Divider, Avatar } from '@chakra-ui/react';
import { LuTags } from 'react-icons/lu';
import { MdOutlineEventBusy } from 'react-icons/md';
import { RiCompassDiscoverLine } from 'react-icons/ri';

import { SideBarButton } from '@/components';
import { CreateCollection } from './create-collection';
import { useGetCollections, useGetSaved } from '../hooks/use-collections-query';
import { useMemo, useState } from 'react';
import { LIMIT, PAGE } from '@/data';

const eventSideBar = [
  {
    name: 'Discover Event',
    icon: <RiCompassDiscoverLine />,
  },
  {
    name: 'Your Event',
    icon: <MdOutlineEventBusy />,
  },
  {
    name: 'Saved Event',
    icon: <LuTags />,
  },
];

export const CollectionSideBar = () => {
  const [page] = useState(PAGE);

  const { data: getSaved } = useGetSaved();
  const idSaved = useMemo(() => {
    return getSaved?.getSaved?.id;
  }, [getSaved]);

  const { data: getCollections } = useGetCollections(
    idSaved as string,
    LIMIT,
    page,
  );

  return (
    <>
      <Text className="font-bold" fontSize="2xl">
        Event
      </Text>
      <Divider className="my-4" />
      <Box className="flex flex-col">
        {eventSideBar.map((item) => (
          <SideBarButton
            key={item.name}
            buttonIcon={item.icon}
            buttonName={item.name}
          />
        ))}
        <CreateCollection />
      </Box>
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        All your collection
      </Text>
      {getCollections?.getCollections.data.map((item) => (
        <Box
          key={item.id}
          className="flex items-center gap-2 my-2 cursor-pointer hover:bg-slate-200 p-2 rounded-xl"
        >
          <Avatar src={item.avatar} />
          <></>
          <Text className="font-bold">{item.name}</Text>
        </Box>
      ))}
      <Divider className="my-4" />
    </>
  );
};

import { useMemo, useState } from 'react';

import { Box, Grid, Text } from '@chakra-ui/react';

import { GroupSideBar, GroupType, useGetGroups } from '@/features';
import { GroupComponent } from '@/features/group';
import NavbarLayout from '@/layout/navbar-layout';

export const Group = () => {
  const [listGroups, setListGroups] = useState<GroupType[]>([]);
  const filter = {};
  const limit = 10;
  const page = 1;

  const { data } = useGetGroups(filter, limit, page);
  useMemo(() => {
    if (data) {
      setListGroups(data.getGroups.data);
    }
  }, [data]);

  return (
    <NavbarLayout navBarChildren={<GroupSideBar />}>
      <Box className="m-4">
        <Text className="text-2xl font-bold mb-4">All your groups</Text>
        <Grid
          templateColumns={{
            sm: 'repeat(2,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(2,1fr)',
            xl: 'repeat(3, 1fr)',
          }}
          gap={{
            sm: '1',
            lg: '4',
          }}
        >
          {listGroups.map((item) => (
            <GroupComponent
              key={item.id}
              avatar={item.avatar}
              description={item.description}
              name={item.name}
              id={item.id}
            />
          ))}
        </Grid>
      </Box>
    </NavbarLayout>
  );
};

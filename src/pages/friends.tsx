import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

import { FriendSideBar, Friend, useGetFriends } from '@/features';
import NavbarLayout from '@/layout/navbar-layout';

export const Friends = () => {
  const { data: friends, refetch } = useGetFriends();

  const friendRequest = friends?.getFriends.friendsReq;
  const listFriends = friends?.getFriends.friends;
  const totalFriendRequest = friends?.getFriends.friendsReq.length;
  const totalFriend = friends?.getFriends.friends.length;

  return (
    <NavbarLayout navBarChildren={<FriendSideBar />}>
      <Box className="w-full flex justify-center items-center">
        <Box className="w-11/12">
          <Text className="my-6 font-bold text-3xl">
            Friend Request: {totalFriendRequest}
          </Text>
          <Grid templateColumns="repeat(6, 1fr)" gap={6} className="w-full">
            {friendRequest?.map((friend) => (
              <GridItem key={friend.id}>
                <Friend
                  isFriend={false}
                  fullname={friend.fullname!}
                  id={friend.id!}
                  avatar={friend.avatar!}
                  refetch={refetch}
                />
              </GridItem>
            ))}
          </Grid>
          <Text className="my-6 font-bold text-3xl">
            All Friends: {totalFriend}
          </Text>
          <Grid templateColumns="repeat(6, 1fr)" gap={6} className="w-full">
            {listFriends?.map((friend) => (
              <GridItem key={friend.id}>
                <Friend
                  isFriend={true}
                  fullname={friend.fullname!}
                  id={friend.id!}
                  avatar={friend.avatar!}
                  refetch={refetch}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </NavbarLayout>
  );
};

import { useQuery } from '@apollo/client';
import { ListFriendType } from '../service/type';
import { GET_FRIENDS } from '../graphql';

export const useGetFriends = () => {
  return useQuery<{ getFriends: ListFriendType }>(GET_FRIENDS);
};

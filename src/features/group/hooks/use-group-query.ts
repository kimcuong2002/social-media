import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';

import { CREATE_GROUP, GET_GROUPS, GET_GROUP_BY_ID } from '../graphql';
import { GroupInput, GroupType, ResPaginationGroupData } from '../service/type';

export const useCreateGroup = () =>
  useMutation<
    { createGroup: { status: string; body: GroupInput } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_GROUP);

export const useGetGroups = (filter = {}, limit: number, page: number) => {
  return useQuery<{ getGroups: ResPaginationGroupData }, OperationVariables>(
    GET_GROUPS,
    {
      variables: {
        filter: filter,
        limit: limit,
        page: page,
      },
    },
  );
};

export const useGetGroupById = (id: string) => {
  return useQuery<{ getGroupById: GroupType }, OperationVariables>(
    GET_GROUP_BY_ID,
    {
      variables: {
        id: id,
      },
    },
  );
};

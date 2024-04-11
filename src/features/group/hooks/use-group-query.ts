import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
} from '@apollo/client';

import { CREATE_GROUP } from '../graphql';
import { GroupInput } from '../service/type';

export const useCreateGroup = () =>
  useMutation<
    { createGroup: { status: string; body: GroupInput } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_GROUP);

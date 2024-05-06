import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
} from '@apollo/client';

import { SEND_FRIEND_REQUEST, UPDATE_PROFILE } from '../graphql';
import { UpdateInput } from '../service/type';

export const useUpdateProfile = () =>
  useMutation<
    { update: UpdateInput },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(UPDATE_PROFILE);

export const useSendReqFriend = () =>
  useMutation<
    { sendReqFriend: { status: string; message: string } },
    OperationVariables
  >(SEND_FRIEND_REQUEST);

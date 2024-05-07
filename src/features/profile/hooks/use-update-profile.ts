import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
} from '@apollo/client';

import {
  ACCEPT_FRIEND_REQUEST,
  DELETE_FRIEND,
  REJECT_FRIEND_REQUEST,
  SEND_FRIEND_REQUEST,
  UPDATE_PROFILE,
} from '../graphql';
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

export const useAcceptReqFriend = () =>
  useMutation<
    { acceptReqFriend: { status: string; message: string } },
    OperationVariables
  >(ACCEPT_FRIEND_REQUEST);

export const useDeleteFriend = () =>
  useMutation<
    { deleteFriend: { status: string; message: string } },
    OperationVariables
  >(DELETE_FRIEND);

export const useRejectReqFriend = () =>
  useMutation<
    { rejectReqFriend: { status: string; message: string } },
    OperationVariables
  >(REJECT_FRIEND_REQUEST);

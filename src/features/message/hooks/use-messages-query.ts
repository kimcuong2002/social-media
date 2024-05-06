import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
} from '@apollo/client';
import { RoomCreateType } from '../service/type';
import { CREATE_ROOM } from '../graphql';

export const useCreateRoom = () =>
  useMutation<
    { createRoom: { body: RoomCreateType } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_ROOM);

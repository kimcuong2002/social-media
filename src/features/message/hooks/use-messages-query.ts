import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';
import {
  MessageInputType,
  MessageType,
  RoomCreateType,
  RoomType,
} from '../service/type';
import {
  CREATE_MESSAGE,
  CREATE_ROOM,
  GET_ALL_MESSAGES,
  GET_ALL_ROOMS,
  GET_ROOM_BY_ID,
} from '../graphql';

export const useCreateRoom = () =>
  useMutation<
    { createRoom: { body: RoomCreateType; id: string } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_ROOM);

export const useGetRoomById = (id: string) => {
  return useQuery<{ getRoomById: RoomType }, OperationVariables>(
    GET_ROOM_BY_ID,
    {
      variables: { id: id },
    },
  );
};

export const useCreateMessage = () =>
  useMutation<
    { createMessage: { body: MessageInputType; status: string } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_MESSAGE);

export const useGetAllMessage = (room: string) => {
  return useQuery<{ getAllMessage: MessageType[] }, OperationVariables>(
    GET_ALL_MESSAGES,
    { variables: { room: room } },
  );
};

export const useGetAllRoom = (idUser: string) => {
  return useQuery<{ getAllRoom: RoomType[] }, OperationVariables>(
    GET_ALL_ROOMS,
    {
      variables: {
        idUser: idUser,
      },
    },
  );
};

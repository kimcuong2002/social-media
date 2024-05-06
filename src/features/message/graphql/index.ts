import { gql } from '@apollo/client';

export const CREATE_ROOM = gql`
  mutation CreateRoom($body: CreateRoomDto!) {
    createRoom(body: $body) {
      id
    }
  }
`;

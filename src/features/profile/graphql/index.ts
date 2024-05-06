import { gql } from '@apollo/client';

export const UPDATE_PROFILE = gql`
  mutation Update($body: UpdateUserDto!, $id: String!) {
    update(body: $body, id: $id) {
      message
      status
    }
  }
`;

export const SEND_FRIEND_REQUEST = gql`
  mutation sendReqFriend($idFriend: String!) {
    sendReqFriend(idFriend: $idFriend) {
      status
      message
    }
  }
`;

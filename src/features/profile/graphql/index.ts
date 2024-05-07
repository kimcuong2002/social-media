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

export const ACCEPT_FRIEND_REQUEST = gql`
  mutation acceptReqFriend($idFriend: String!) {
    acceptReqFriend(idFriend: $idFriend) {
      status
      message
    }
  }
`;

export const DELETE_FRIEND = gql`
  mutation deleteFriend($idFriend: String!) {
    deleteFriend(idFriend: $idFriend) {
      status
      message
    }
  }
`;

export const REJECT_FRIEND_REQUEST = gql`
  mutation rejectReqFriend($idFriend: String!) {
    rejectReqFriend(idFriend: $idFriend) {
      status
      message
    }
  }
`;

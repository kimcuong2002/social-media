import { gql } from '@apollo/client';

export const UPDATE_PROFILE = gql`
  mutation Update($body: UpdateUserDto!, $id: String!) {
    update(body: $body, id: $id) {
      message
      status
    }
  }
`;

export const DELETE_FRIEND = gql`
  mutation deleteFriend($friendId: String!) {
    deleteFriend(friendId: $friendId) {
      status
      message
    }
  }
`;

export const REJECT_FRIEND_REQUEST = gql`
  mutation rejectReqFriend($friendId: String!) {
    rejectReqFriend(friendId: $friendId) {
      status
      message
    }
  }
`;

export const SEND_FRIEND_REQUEST = gql`
  mutation requestAddFriend($friendId: String!) {
    requestAddFriend(friendId: $friendId) {
      status
      message
    }
  }
`;

export const ACCEPT_FRIEND_REQUEST = gql`
  mutation acceptFriendReq($friendId: String!) {
    acceptFriendReq(friendId: $friendId) {
      status
      message
    }
  }
`;

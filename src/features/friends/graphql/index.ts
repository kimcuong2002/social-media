import { gql } from '@apollo/client';

export const GET_FRIENDS = gql`
  query GetFriends {
    getFriends {
      friends {
        id
        fullname
        avatar
      }
      friendsReq {
        id
        fullname
        avatar
      }
    }
  }
`;

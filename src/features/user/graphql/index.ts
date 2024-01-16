import { gql } from '@apollo/client';

export const GET_USER_DETAIL = gql`
  query ($id: String!) {[
    getUserById(id: $id) {
      id
      avatar
      createdAt
      dayOfBirth
      description
      email
      friends
      friendsReq
      fullname
      gender
      id
      password
      phone
      role
      updatedAt
      username
    }
  ]} 
`;

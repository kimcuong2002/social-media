import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query ($id: String!) {
    getUserById(id: $id) {
      avatar
      createdAt
      coverImage
      dayOfBirth
      description
      email
      address
      description
      company
      university
      relationship
      friends {
        fullname
        avatar
      }
      fullname
      gender
      id
      phone
    }
  }
`;

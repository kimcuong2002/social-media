import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($body: LoginUserDto!) {
    login(body: $body) {
      user {
        fullname
        avatar
        dayOfBirth
        description
        gender
        id
        phone
        email
        role
        createdAt
        friends {
          fullname
          avatar
          dayOfBirth
          description
          gender
          id
          phone
          email
          role
          createdAt
        }
        friendsReq {
          fullname
          avatar
          dayOfBirth
          description
          gender
          id
          phone
          email
          role
          createdAt
        }
      }
      access_token
    }
  }
`;

export const SIGN_UP = gql`
  mutation Signup($body: SignUpUserDto!) {
    signup(body: $body) {
      username
    }
  }
`;

import { gql } from '@apollo/client';

export const CREATE_GROUP = gql`
  mutation createGroup($body: CreateGroupDto!) {
    createGroup(body: $body) {
      name
      avatar
      createdAt
    }
  }
`;

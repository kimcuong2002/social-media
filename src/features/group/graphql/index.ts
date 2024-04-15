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

export const GET_GROUPS = gql`
  query GetGroups($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {
    getGroups(filter: $filter, page: $page, limit: $limit) {
      data {
        name
        id
        avatar
        description
      }
    }
  }
`;

export const GET_GROUP_BY_ID = gql`
  query GetGroupById($id: String!) {
    getGroupById(id: $id) {
      allFiles
      avatar
      coverImage
      createdAt
      description
      id
      name
      updatedAt
      isPrivate
      admins {
        fullname
        id
        avatar
      }
      members {
        fullname
        id
        avatar
      }
      membersReq {
        fullname
        id
        avatar
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const CREATE_COLLECTION = gql`
  mutation CreateCollection($body: CreateCollectionDto!) {
    createCollection(body: $body) {
      id
      name
    }
  }
`;

export const GET_SAVED = gql`
  query GetSaved {
    getSaved {
      id
      markets
      posts {
        author {
          id
          fullname
          avatar
        }
        authorsPostShared {
          id
          fullname
          avatar
        }
        content
        createdAt
        id
        images
        topic {
          name
        }
        updatedAt
        usersLiked {
          id
          fullname
          avatar
        }
        videos
      }
    }
  }
`;

export const GET_COLLECTIONS = gql`
  query GetCollections($idSaved: String!, $limit: Float!, $page: Float!) {
    getCollections(idSaved: $idSaved, limit: $limit, page: $page) {
      page
      total
      data {
        id
        name
        avatar
      }
    }
  }
`;

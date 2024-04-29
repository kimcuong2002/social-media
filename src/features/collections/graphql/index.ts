import { gql } from '@apollo/client';

export const CREATE_COLLECTION = gql`
  mutation CreateCollection($body: CreateCollectionDto!) {
    createCollection(body: $body) {
      message
      status
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

import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetAllPost($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {
    getAllPost(filter: $filter, page: $page, limit: $limit) {
      page
      total
      data {
        id
        authorsPostShared {
          fullname
          avatar
          id
        }
        author {
          fullname
          avatar
          id
        }
        content
        images
        topic {
          image
          name
          color
          id
        }
        createdAt
        updatedAt
        usersLiked {
          fullname
          avatar
          id
        }
      }
    }
  }
`;

export const GET_POST_DETAIL = gql`
  query GetPostById($id: String!) {
    getPostById(id: $id) {
      content
      createdAt
      id
      author {
        fullname
        id
        avatar
      }
      images
      isGhim
      isPostToGroup {
        status
        idGroup
      }
      topic {
        name
      }
      updatedAt
      videos
      usersLiked {
        avatar
        createdAt
        dayOfBirth
        description
        email
        friends {
          fullname
          id
          avatar
        }
        friendsReq {
          fullname
          id
          avatar
        }
        fullname
        gender
        id
        phone
      }
      authorsPostShared {
        avatar
        createdAt
        dayOfBirth
        description
        email
        friends {
          fullname
          id
          avatar
        }
        friendsReq {
          fullname
          id
          avatar
        }
        fullname
        gender
        id
        phone
      }
    }
  }
`;

export const GET_POST_BY_GROUP = gql`
  query GetPostsByGroup($idGroup: String!, $limit: Float!, $page: Float!) {
    getPostsByGroup(idGroup: $idGroup, limit: $limit, page: $page) {
      page
      total
      data {
        authorsPostShared {
          avatar
          fullname
          id
        }
        content
        createdAt
        id
        author {
          fullname
          id
          avatar
        }
        images
        isGhim
        isPostToGroup {
          idGroup
          status
        }
        topic {
          id
          name
        }
        updatedAt
        usersLiked {
          id
          fullname
        }
        videos
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($body: CreatePostDto!) {
    createPost(body: $body) {
      authorsPostShared {
        fullname
        avatar
      }
      content
      createdAt
      id
      images
      isGhim
      updatedAt
      usersLiked {
        fullname
        avatar
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($idPost: String!, $idUser: String!) {
    likePost(idPost: $idPost, idUser: $idUser) {
      message
      status
    }
  }
`;

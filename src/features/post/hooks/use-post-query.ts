import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';

import {
  CREATE_POST,
  GET_POSTS,
  GET_POST_DETAIL,
  GET_POST_BY_GROUP,
  LIKE_POST,
  GET_POST_PY_AUTHOR,
  DELETE_POST,
} from '../graphql';
import {
  PostInput,
  PostType,
  PostTypeRes,
  ResPaginationPostData,
} from '../service/type';

export const useCreatePostMutation = () =>
  useMutation<
    { createPost: { status: string; body: PostInput } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_POST);

export const useGetPostsQuery = (limit: number, page: number, filter = {}) => {
  return useQuery<{ getAllPost: ResPaginationPostData }, OperationVariables>(
    GET_POSTS,
    {
      variables: {
        limit: limit,
        page: page,
        filter: filter,
      },
    },
  );
};

export const useGetPostDetail = (id: string) =>
  useQuery<{ getPostById: PostTypeRes }, OperationVariables>(GET_POST_DETAIL, {
    variables: { id },
  });

export const useGetPostByGroup = () =>
  useQuery<{ getPostByGroup: PostType }, OperationVariables>(GET_POST_BY_GROUP);

export const useLikePost = () =>
  useMutation<{ likePost: { status: string } }, OperationVariables>(LIKE_POST);

export const useGetPostByAuthor = (
  idAuthor: string,
  limit: number,
  page: number,
) =>
  useQuery<{ getPostByAuthor: ResPaginationPostData }, OperationVariables>(
    GET_POST_PY_AUTHOR,
    {
      variables: {
        idAuthor: idAuthor,
        limit: limit,
        page: page,
      },
    },
  );

export const useDeletePost = () =>
  useMutation<{ deletePost: { status: string } }, OperationVariables>(
    DELETE_POST,
  );

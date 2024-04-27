import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';
import { CommentInputType, ResPaginationCommentData } from '../service';
import {
  CREATE_COMMENT,
  CREATE_GET_COMMENT_REPLY,
  GET_COMMENTS,
} from '../graphql';

export const useCreateComment = () =>
  useMutation<
    { createComment: { status: string; body: CommentInputType } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_COMMENT);

export const useGetCommentsQuery = (
  limit: number,
  page: number,
  postId: string,
) => {
  return useQuery<
    { getComments: ResPaginationCommentData },
    OperationVariables
  >(GET_COMMENTS, {
    variables: {
      limit: limit,
      page: page,
      postId: postId,
    },
  });
};

export const useCreateReplyComment = () =>
  useMutation<
    {
      createReplyComment: {
        body: CommentInputType;
        idCmtParent: string;
      };
    },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_GET_COMMENT_REPLY);

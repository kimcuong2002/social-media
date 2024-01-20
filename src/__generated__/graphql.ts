/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any };
};

export type CollectionDto = {
  __typename?: 'CollectionDto';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  markets: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  posts: Array<Post>;
  saved: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateCollectionDto = {
  createdAt?: Scalars['DateTime']['input'];
  markets?: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  posts?: Array<Scalars['String']['input']>;
  saved: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
};

export type CreateGroupDto = {
  admins?: Array<Scalars['String']['input']>;
  allFiles?: Array<Scalars['String']['input']>;
  author?: Scalars['String']['input'];
  avatar: Scalars['String']['input'];
  coverImage: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  description?: Scalars['String']['input'];
  isPrivate?: Scalars['Boolean']['input'];
  members?: Array<Scalars['String']['input']>;
  membersReq?: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
};

export type CreatePostDto = {
  authorsPostShared?: Array<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  idAuthor: Scalars['String']['input'];
  idGroup?: Scalars['String']['input'];
  image?: Array<Scalars['String']['input']>;
  isGhim?: Scalars['Boolean']['input'];
  statusPostToGroup?: Scalars['Boolean']['input'];
  topic: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
  usersLiked?: Array<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
  video?: Array<Scalars['String']['input']>;
};

export type CreateSavedDto = {
  author: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  markets?: Array<Scalars['String']['input']>;
  posts?: Array<Scalars['String']['input']>;
  updatedAt?: Scalars['DateTime']['input'];
};

export type CreateTopicDto = {
  color: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rank?: Scalars['Float']['input'];
  updatedAt?: Scalars['DateTime']['input'];
};

export type CreateUserDto = {
  avatar?: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  dayOfBirth?: Scalars['String']['input'];
  description?: Scalars['String']['input'];
  email: Scalars['String']['input'];
  friends?: Array<Scalars['String']['input']>;
  friendsReq?: Array<Scalars['String']['input']>;
  fullname: Scalars['String']['input'];
  gender?: Scalars['Float']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  role?: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
  username: Scalars['String']['input'];
};

export type Group = {
  __typename?: 'Group';
  admins: Array<User>;
  allFiles: Array<Scalars['String']['output']>;
  author: User;
  avatar: Scalars['String']['output'];
  coverImage: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  idPrivate: Scalars['Boolean']['output'];
  members: Array<User>;
  membersReq: Array<User>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IsPostToGroupDto = {
  __typename?: 'IsPostToGroupDto';
  idGroup: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  verified: Scalars['Boolean']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
  expiresIn: Scalars['String']['output'];
  user: User;
};

export type LoginUserDto = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  create: ResponseUserDto;
  createCollection: ResponseDto;
  createGroup: Group;
  createPost: Post;
  createSaved: Saved;
  createTopic: Topic;
  delete: ResponseDto;
  deleteCollection: ResponseDto;
  deleteGroup: ResponseDto;
  deleteMarketCollection: ResponseDto;
  deleteMarketSaved: ResponseDto;
  deletePost: ResponseDto;
  deletePostCollection: ResponseDto;
  deletePostSaved: ResponseDto;
  deleteTopic: ResponseDto;
  login: LoginResponse;
  signup: User;
  update: ResponseDto;
  updateCollection: ResponseDto;
  updateGroup: ResponseDto;
  updateMarketCollection: ResponseDto;
  updateMarketSaved: ResponseDto;
  updatePost: ResponseDto;
  updatePostCollection: ResponseDto;
  updatePostSaved: ResponseDto;
  updateTopic: ResponseDto;
  uploadMultipleFiles: Array<ResponseSingleUpload>;
  uploadSingleFiles: ResponseSingleUpload;
};

export type MutationCreateArgs = {
  body: CreateUserDto;
};

export type MutationCreateCollectionArgs = {
  body: CreateCollectionDto;
};

export type MutationCreateGroupArgs = {
  body: CreateGroupDto;
};

export type MutationCreatePostArgs = {
  body: CreatePostDto;
};

export type MutationCreateSavedArgs = {
  body: CreateSavedDto;
};

export type MutationCreateTopicArgs = {
  body: CreateTopicDto;
};

export type MutationDeleteArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteCollectionArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteGroupArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteMarketCollectionArgs = {
  id: Scalars['String']['input'];
  idMarket: Scalars['String']['input'];
};

export type MutationDeleteMarketSavedArgs = {
  idMarket: Scalars['String']['input'];
  idSaved: Scalars['String']['input'];
};

export type MutationDeletePostArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeletePostCollectionArgs = {
  id: Scalars['String']['input'];
  idPost: Scalars['String']['input'];
};

export type MutationDeletePostSavedArgs = {
  idPost: Scalars['String']['input'];
  idSaved: Scalars['String']['input'];
};

export type MutationDeleteTopicArgs = {
  id: Scalars['String']['input'];
};

export type MutationLoginArgs = {
  body: LoginUserDto;
};

export type MutationSignupArgs = {
  body: SignUpUserDto;
};

export type MutationUpdateArgs = {
  body: UpdateUserDto;
  id: Scalars['String']['input'];
};

export type MutationUpdateCollectionArgs = {
  body: UpdateCollectionDto;
  id: Scalars['String']['input'];
};

export type MutationUpdateGroupArgs = {
  body: UpdateGroupDto;
  id: Scalars['String']['input'];
};

export type MutationUpdateMarketCollectionArgs = {
  id: Scalars['String']['input'];
  idMarket: Scalars['String']['input'];
};

export type MutationUpdateMarketSavedArgs = {
  idMarket: Scalars['String']['input'];
  idSaved: Scalars['String']['input'];
};

export type MutationUpdatePostArgs = {
  body: UpdatePostDto;
  id: Scalars['String']['input'];
};

export type MutationUpdatePostCollectionArgs = {
  id: Scalars['String']['input'];
  idPost: Scalars['String']['input'];
};

export type MutationUpdatePostSavedArgs = {
  idPost: Scalars['String']['input'];
  idSaved: Scalars['String']['input'];
};

export type MutationUpdateTopicArgs = {
  body: UpdateTopicDto;
  id: Scalars['String']['input'];
};

export type MutationUploadMultipleFilesArgs = {
  files: Array<Scalars['Upload']['input']>;
};

export type MutationUploadSingleFilesArgs = {
  file: Scalars['Upload']['input'];
};

export type PaginationCollectionDto = {
  __typename?: 'PaginationCollectionDto';
  data: Array<CollectionDto>;
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type PaginationGroupDto = {
  __typename?: 'PaginationGroupDto';
  data: Array<Group>;
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type PaginationPostDto = {
  __typename?: 'PaginationPostDto';
  data: Array<Post>;
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type PaginationUserDto = {
  __typename?: 'PaginationUserDto';
  data: Array<User>;
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type ParamsQueryDto = {
  query?: InputMaybe<Scalars['String']['input']>;
};

export type Post = {
  __typename?: 'Post';
  authorsPostShared: Array<User>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  idAuthor: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  isGhim: Scalars['Boolean']['output'];
  isPostToGroup: IsPostToGroupDto;
  topic: Topic;
  updatedAt: Scalars['DateTime']['output'];
  usersLiked: Array<User>;
  videos: Array<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getCollections: PaginationCollectionDto;
  getGroupById: Group;
  getInfoUser: ResponseUserDto;
  getPostById: Post;
  getPosts: PaginationGroupDto;
  getPostsByGroup: PaginationPostDto;
  getSaved: Saved;
  topic: Topic;
  topics: Array<Topic>;
  user: ResponseDto;
  users: PaginationUserDto;
};

export type QueryGetCollectionsArgs = {
  idSaved: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
};

export type QueryGetGroupByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetPostByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetPostsArgs = {
  filter: ParamsQueryDto;
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
};

export type QueryGetPostsByGroupArgs = {
  idGroup: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
};

export type QueryGetSavedArgs = {
  idAuthor: Scalars['String']['input'];
};

export type QueryTopicArgs = {
  name: Scalars['String']['input'];
};

export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

export type QueryUsersArgs = {
  query: QueryPagination;
};

export type QueryPagination = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
};

export type ResponseDto = {
  __typename?: 'ResponseDto';
  message: Scalars['String']['output'];
  status: Scalars['Float']['output'];
};

export type ResponseSingleUpload = {
  __typename?: 'ResponseSingleUpload';
  url: Scalars['String']['output'];
};

export type ResponseUserDto = {
  __typename?: 'ResponseUserDto';
  avatar: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dayOfBirth: Scalars['String']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  friends: Array<User>;
  friendsReq: Array<User>;
  fullname: Scalars['String']['output'];
  gender: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  phone: Scalars['String']['output'];
  role: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type Saved = {
  __typename?: 'Saved';
  author: User;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  markets: Array<Scalars['String']['output']>;
  posts: Array<Post>;
  updatedAt: Scalars['DateTime']['output'];
};

export type SignUpUserDto = {
  avatar?: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  dayOfBirth?: Scalars['String']['input'];
  description?: Scalars['String']['input'];
  email: Scalars['String']['input'];
  friends?: Array<Scalars['String']['input']>;
  friendsReq?: Array<Scalars['String']['input']>;
  fullname: Scalars['String']['input'];
  gender?: Scalars['Float']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  role?: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
  username: Scalars['String']['input'];
};

export type Topic = {
  __typename?: 'Topic';
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rank: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateCollectionDto = {
  name: Scalars['String']['input'];
};

export type UpdateGroupDto = {
  admins?: InputMaybe<Array<Scalars['String']['input']>>;
  allFiles?: InputMaybe<Array<Scalars['String']['input']>>;
  author?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  members?: InputMaybe<Array<Scalars['String']['input']>>;
  membersReq?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdatePostDto = {
  authorsPostShared?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  idAuthor?: InputMaybe<Scalars['String']['input']>;
  idGroup?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Array<Scalars['String']['input']>>;
  isGhim?: InputMaybe<Scalars['Boolean']['input']>;
  statusPostToGroup?: InputMaybe<Scalars['Boolean']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  usersLiked?: InputMaybe<Array<Scalars['String']['input']>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  video?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateTopicDto = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateUserDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  dayOfBirth?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  friends?: InputMaybe<Array<Scalars['String']['input']>>;
  friendsReq?: InputMaybe<Array<Scalars['String']['input']>>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Float']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dayOfBirth: Scalars['String']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  friends: Array<User>;
  friendsReq: Array<User>;
  fullname: Scalars['String']['output'];
  gender: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  role: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  body: LoginUserDto;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'LoginResponse';
    access_token: string;
    user: {
      __typename?: 'User';
      fullname: string;
      avatar: string;
      dayOfBirth: string;
      description: string;
      gender: number;
      id: string;
      phone: string;
      email: string;
      role: string;
      createdAt: any;
      friends: Array<{
        __typename?: 'User';
        fullname: string;
        avatar: string;
        dayOfBirth: string;
        description: string;
        gender: number;
        id: string;
        phone: string;
        email: string;
        role: string;
        createdAt: any;
      }>;
      friendsReq: Array<{
        __typename?: 'User';
        fullname: string;
        avatar: string;
        dayOfBirth: string;
        description: string;
        gender: number;
        id: string;
        phone: string;
        email: string;
        role: string;
        createdAt: any;
      }>;
    };
  };
};

export type SignupMutationVariables = Exact<{
  body: SignUpUserDto;
}>;

export type SignupMutation = {
  __typename?: 'Mutation';
  signup: { __typename?: 'User'; username: string };
};

export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'body' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LoginUserDto' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'body' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'body' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fullname' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avatar' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dayOfBirth' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'gender' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'friends' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'fullname' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'dayOfBirth' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'gender' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'phone' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'email' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'role' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'friendsReq' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'fullname' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'dayOfBirth' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'gender' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'phone' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'email' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'role' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'access_token' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SignupDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Signup' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'body' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'SignUpUserDto' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signup' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'body' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'body' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;

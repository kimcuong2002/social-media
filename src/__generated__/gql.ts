/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Login($body: LoginUserDto!) {\n    login(body: $body) {\n      user {\n        fullname\n        avatar\n        dayOfBirth\n        description\n        gender\n        id\n        phone\n        email\n        role\n        createdAt\n        friends {\n          fullname\n          avatar\n          dayOfBirth\n          description\n          gender\n          id\n          phone\n          email\n          role\n          createdAt\n        }\n        friendsReq {\n          fullname\n          avatar\n          dayOfBirth\n          description\n          gender\n          id\n          phone\n          email\n          role\n          createdAt\n        }\n      }\n      access_token\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Signup($body: SignUpUserDto!) {\n    signup(body: $body) {\n      username\n    }\n  }\n": types.SignupDocument,
    "\n  query GetInfoUser {\n    getInfoUser {\n      avatar\n      createdAt\n      coverImage\n      dayOfBirth\n      description\n      email\n      address\n      description\n      company\n      university\n      relationship\n      friends {\n        fullname\n        avatar\n      }\n      friendsReq {\n        fullname\n        avatar\n      }\n      fullname\n      gender\n      id\n      phone\n    }\n  }\n": types.GetInfoUserDocument,
    "\n  mutation createGroup($body: CreateGroupDto!) {\n    createGroup(body: $body) {\n      name\n      avatar\n      createdAt\n    }\n  }\n": types.CreateGroupDocument,
    "\n  query GetGroups($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {\n    getGroups(filter: $filter, page: $page, limit: $limit) {\n      data {\n        name\n        id\n        avatar\n        description\n      }\n    }\n  }\n": types.GetGroupsDocument,
    "\n  query GetGroupById($id: String!) {\n    getGroupById(id: $id) {\n      allFiles\n      avatar\n      coverImage\n      createdAt\n      description\n      id\n      name\n      updatedAt\n      isPrivate\n      admins {\n        fullname\n        id\n        avatar\n      }\n      members {\n        fullname\n        id\n        avatar\n      }\n      membersReq {\n        fullname\n        id\n        avatar\n      }\n    }\n  }\n": types.GetGroupByIdDocument,
    "\n  mutation Update($body: UpdateUserDto!, $id: String!) {\n    update(body: $body, id: $id) {\n      message\n      status\n    }\n  }\n": types.UpdateDocument,
    "\n  query getTopics {\n    topics {\n      name\n      color\n      image\n      rank\n      id\n    }\n  }\n": types.GetTopicsDocument,
    "\n  mutation UploadSingleFiles($file: Upload!) {\n    uploadSingleFiles(file: $file) {\n      url\n    }\n  }\n": types.UploadSingleFilesDocument,
    "\n  mutation UploadMultipleFiles($files: [Upload!]!) {\n    uploadMultipleFiles(files: $files) {\n      url\n    }\n  }\n": types.UploadMultipleFilesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login($body: LoginUserDto!) {\n    login(body: $body) {\n      user {\n        fullname\n        avatar\n        dayOfBirth\n        description\n        gender\n        id\n        phone\n        email\n        role\n        createdAt\n        friends {\n          fullname\n          avatar\n          dayOfBirth\n          description\n          gender\n          id\n          phone\n          email\n          role\n          createdAt\n        }\n        friendsReq {\n          fullname\n          avatar\n          dayOfBirth\n          description\n          gender\n          id\n          phone\n          email\n          role\n          createdAt\n        }\n      }\n      access_token\n    }\n  }\n"): (typeof documents)["\n  mutation Login($body: LoginUserDto!) {\n    login(body: $body) {\n      user {\n        fullname\n        avatar\n        dayOfBirth\n        description\n        gender\n        id\n        phone\n        email\n        role\n        createdAt\n        friends {\n          fullname\n          avatar\n          dayOfBirth\n          description\n          gender\n          id\n          phone\n          email\n          role\n          createdAt\n        }\n        friendsReq {\n          fullname\n          avatar\n          dayOfBirth\n          description\n          gender\n          id\n          phone\n          email\n          role\n          createdAt\n        }\n      }\n      access_token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Signup($body: SignUpUserDto!) {\n    signup(body: $body) {\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation Signup($body: SignUpUserDto!) {\n    signup(body: $body) {\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetInfoUser {\n    getInfoUser {\n      avatar\n      createdAt\n      coverImage\n      dayOfBirth\n      description\n      email\n      address\n      description\n      company\n      university\n      relationship\n      friends {\n        fullname\n        avatar\n      }\n      friendsReq {\n        fullname\n        avatar\n      }\n      fullname\n      gender\n      id\n      phone\n    }\n  }\n"): (typeof documents)["\n  query GetInfoUser {\n    getInfoUser {\n      avatar\n      createdAt\n      coverImage\n      dayOfBirth\n      description\n      email\n      address\n      description\n      company\n      university\n      relationship\n      friends {\n        fullname\n        avatar\n      }\n      friendsReq {\n        fullname\n        avatar\n      }\n      fullname\n      gender\n      id\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createGroup($body: CreateGroupDto!) {\n    createGroup(body: $body) {\n      name\n      avatar\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation createGroup($body: CreateGroupDto!) {\n    createGroup(body: $body) {\n      name\n      avatar\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetGroups($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {\n    getGroups(filter: $filter, page: $page, limit: $limit) {\n      data {\n        name\n        id\n        avatar\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetGroups($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {\n    getGroups(filter: $filter, page: $page, limit: $limit) {\n      data {\n        name\n        id\n        avatar\n        description\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetGroupById($id: String!) {\n    getGroupById(id: $id) {\n      allFiles\n      avatar\n      coverImage\n      createdAt\n      description\n      id\n      name\n      updatedAt\n      isPrivate\n      admins {\n        fullname\n        id\n        avatar\n      }\n      members {\n        fullname\n        id\n        avatar\n      }\n      membersReq {\n        fullname\n        id\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetGroupById($id: String!) {\n    getGroupById(id: $id) {\n      allFiles\n      avatar\n      coverImage\n      createdAt\n      description\n      id\n      name\n      updatedAt\n      isPrivate\n      admins {\n        fullname\n        id\n        avatar\n      }\n      members {\n        fullname\n        id\n        avatar\n      }\n      membersReq {\n        fullname\n        id\n        avatar\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Update($body: UpdateUserDto!, $id: String!) {\n    update(body: $body, id: $id) {\n      message\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation Update($body: UpdateUserDto!, $id: String!) {\n    update(body: $body, id: $id) {\n      message\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTopics {\n    topics {\n      name\n      color\n      image\n      rank\n      id\n    }\n  }\n"): (typeof documents)["\n  query getTopics {\n    topics {\n      name\n      color\n      image\n      rank\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UploadSingleFiles($file: Upload!) {\n    uploadSingleFiles(file: $file) {\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation UploadSingleFiles($file: Upload!) {\n    uploadSingleFiles(file: $file) {\n      url\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UploadMultipleFiles($files: [Upload!]!) {\n    uploadMultipleFiles(files: $files) {\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation UploadMultipleFiles($files: [Upload!]!) {\n    uploadMultipleFiles(files: $files) {\n      url\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
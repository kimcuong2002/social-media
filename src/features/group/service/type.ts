import { UserType } from '@/features/user';

export interface GroupType {
  admins?: UserType[];
  allFiles?: string[];
  author?: UserType;
  avatar?: string;
  coverImage?: string;
  createAt?: Date;
  description?: string;
  id?: string;
  idPrivate?: boolean;
  members?: UserType[];
  membersReq?: UserType[];
  name?: string;
  updatedAt?: Date;
  isPrivate?: boolean;
}

export type GroupInput = Pick<
  GroupType,
  'name' | 'avatar' | 'coverImage' | 'description'
>;

export type ResPaginationGroupData = {
  data: GroupType[];
  page: number;
  total: number;
};

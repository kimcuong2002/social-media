import { UserType } from '@/features/user';

export interface GroupType {
  admins: UserType[];
  allFiles: string[];
  author: UserType;
  avatar: string;
  coverimage: string;
  createAt: Date;
  description: string;
  id: string;
  idPrivate: boolean;
  members: UserType[];
  membersReq: UserType[];
  name: string;
  updatedAt: Date;
}

import { UserType } from '@/features/user';

export type RoomType = {
  author: UserType;
  createdAt: Date;
  id: string;
  members: UserType[];
  name: string;
  updatedAt: Date;
};

export type RoomCreateType = Pick<RoomType, 'name' | 'members'>;

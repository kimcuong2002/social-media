import { PostType } from '@/features/post/service/type';

export type CollectioType = {
  createdAt: Date;
  id: string;
  markets?: string[];
  name: string;
  posts: PostType[];
  saved?: string;
  updatedAt: Date;
  avatar?: string;
};

export type CollectionInputType = Pick<
  CollectioType,
  'name' | 'saved' | 'avatar'
>;

export type SavedType = {
  id: string;
  markets: string[];
  posts: PostType[];
};

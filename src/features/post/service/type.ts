export type PostTypeRes = {
  id?: string;
  author: {
    fullname: string;
    avatar: string;
    id: string;
  };
  topic: {
    image: string;
    name: string;
    color: string;
    id: string;
  };
  content: string;
  images?: string[];
  video?: string[];
  isGhim?: boolean;
  usersLiked?: { fullname: string; id: string; avatar: string }[] | undefined;
  authorsPostShared?: string[];
  statusPostToGroup?: boolean;
  verified?: boolean;
  idGroup?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PostType = {
  idPost?: string | undefined;
  images?: string[];
  content?: string;
  typePost?: 'video' | 'content';
  videoSrc?: string;
  fullname: string;
  avatar?: string;
  createdAt: Date;
  usersLiked?: { fullname: string; id: string; avatar: string }[] | undefined;
  topic?: {
    image: string;
    name: string;
    color: string;
    id: string;
  };
};

export type PostInput = Pick<
  PostTypeRes,
  'topic' | 'content' | 'images' | 'video' | 'createdAt'
>;

export type ResPaginationPostData = {
  page: number;
  limit: number;
  data: PostTypeRes[];
};

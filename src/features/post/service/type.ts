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
  };
  content: string;
  images?: string[];
  video?: string[];
  // isGhim?: boolean;
  // userLiked?: string[];
  // authorsPostShared?: string[];
  // statusPostToGroup?: boolean;
  // verified?: boolean;
  // idGroup?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PostType = {
  id?: string;
  images?: string[];
  content?: string;
  typePost?: 'video' | 'content';
  videoSrc?: string;
  fullname: string;
  avatar?: string;
  createdAt: Date;
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

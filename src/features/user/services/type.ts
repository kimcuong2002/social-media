export type UserType = {
  avatar?: string;
  createdAt?: Date;
  dayOfBirth?: string;
  description?: string;
  email?: string;
  friends?: UserType[];
  friendsReq?: UserType[];
  fullname?: string;
  gender?: number;
  id?: string;
  password?: string;
  phone?: string;
  role?: string;
  updatedAt?: Date;
  username?: string;
};

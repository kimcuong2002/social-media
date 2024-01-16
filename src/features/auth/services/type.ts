import { UserType } from '@/features/user';

export type LoginValues = {
  username: string;
  password: string;
};

export type ResponseLogin = {
  access_token: string;
  user: UserType;
};

export type RegisterInput = Partial<
  Pick<
    UserType,
    'fullname' | 'phone' | 'username' | 'password' | 'email' | 'gender'
  >
>;

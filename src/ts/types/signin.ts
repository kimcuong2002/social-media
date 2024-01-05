export interface SignInInput {
  firstname: string;
  surname: string;
  phonenumber: string;
  username: string;
  password: string;
  gender: string;
}

export type LoginInput = Partial<Pick<SignInInput, 'username' | 'password'>>;

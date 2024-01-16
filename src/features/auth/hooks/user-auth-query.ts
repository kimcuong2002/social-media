import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
} from '@apollo/client';

import useAuthStore from './user-auth-store';
import { LOGIN, SIGN_UP } from '../graphql';
import { RegisterInput, ResponseLogin } from '../services/type';

export const useLoginMutation = () =>
  useMutation<
    { login: ResponseLogin },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(LOGIN);

export const useSignUpMutation = () =>
  useMutation<
    { signup: RegisterInput },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(SIGN_UP);

export const useLogoutMutation = () => {
  const logout = useAuthStore((state) => state.logout);

  return { logout };
};

import { useAppDispatch } from '@/lib/store';
import { CloudAdminUser } from '../types';
import { authActions } from './slice';

interface IUseAuth {
  setUser: (user: CloudAdminUser) => void;
  setAccessToken: (v: string) => void;
}

export const useAuth = (): IUseAuth => {
  const dispatch = useAppDispatch();

  const setUser = (user: CloudAdminUser) => {
    dispatch(authActions.setUser(user));
  };
  const setAccessToken = (token: string) => {
    dispatch(authActions.setAccessToken(token));
  };

  return {
    setUser,
    setAccessToken,
  };
};

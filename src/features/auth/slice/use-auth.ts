import { authActions } from './slice';
import { CloudAdminUser } from '@/lib/auth';
import { useAppDispatch } from '@/lib/store';

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

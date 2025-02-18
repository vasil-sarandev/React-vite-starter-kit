import { AppState } from '@/lib/store';
import { CloudAdminUser } from '@/lib/shared';

export const getAuthState = (state: AppState) => state.auth;
export const getAuthLoggedInUser = (state: AppState) =>
  state.auth.user as CloudAdminUser;

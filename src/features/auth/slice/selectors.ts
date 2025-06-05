import { CloudAdminUser } from '@/lib/auth';
import { AppState } from '@/lib/store';

export const getAuthState = (state: AppState) => state.auth;
export const getAuthLoggedInUser = (state: AppState) => state.auth.user as CloudAdminUser;

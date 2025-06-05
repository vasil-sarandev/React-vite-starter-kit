import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CloudAdminUser } from '@/lib/auth';
import { resetStoreActionMatcher } from '@/lib/store/utils';

export interface IAuthState {
  user: CloudAdminUser | null;
  accessToken: string | null;
  isLoggedIn: boolean;
}

const initialState: IAuthState = {
  // TODO: change this
  // user: null,
  user: {
    name: 'Vasil S.',
    email: 'vasil@mail.com',
  },
  accessToken: null,
  isLoggedIn: false,
};

export { initialState as initialStateAuth };

const setUserAction = (state: IAuthState, action: PayloadAction<CloudAdminUser>) => {
  const user = action.payload;
  state.user = user;
  state.isLoggedIn = true;
};

export const { reducer: authReducer, actions: authActions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: setUserAction,
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
      //TODO: set axios auth headers here.
    },
  },
  extraReducers: builder => {
    builder.addMatcher(resetStoreActionMatcher, () => {
      return initialState;
    });
  },
});

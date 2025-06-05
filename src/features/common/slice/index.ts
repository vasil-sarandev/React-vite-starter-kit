import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { resetStoreActionMatcher } from '@/lib/store/utils';

export interface ICommonState {
  loginRedirectUrl: string | null;
}

const initialState: ICommonState = {
  loginRedirectUrl: null,
};

export { initialState as initialStateCommon };

export const { reducer: commonReducer, actions: commonActions } = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoginRedirectUrl: (state, action: PayloadAction<string | null>) => {
      state.loginRedirectUrl = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(resetStoreActionMatcher, () => {
      return initialState;
    });
  },
});

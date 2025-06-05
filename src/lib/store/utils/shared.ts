import { Action, PayloadAction } from '@reduxjs/toolkit';

export const RESET_STORE_ACTION_TYPE = 'RESET_STORE';

export const resetStoreAction = (): Action => ({
  type: RESET_STORE_ACTION_TYPE,
});

export const resetStoreActionMatcher = (action: Action | PayloadAction): boolean => {
  return action.type === RESET_STORE_ACTION_TYPE;
};

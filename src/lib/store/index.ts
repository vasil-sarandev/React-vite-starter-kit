import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import { generalPurposeMiddleware, loggerMiddleWare } from './utils';
import { authReducer } from '@/features/auth';
import { commonReducer } from '@/features/common';
import { isAppInProd } from '@/lib/shared';

export const PERSIST_STORE_KEY = 'root';

const PERSIST_CONFIG: PersistConfig<AppState> = {
  key: PERSIST_STORE_KEY,
  storage: sessionStorage,
  // TODO: add reducers here when we want to persist them.
  // AUTH should be added after we've implemented authentication
  whitelist: [],
};

export const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
});
export const persistedReducer = persistReducer(PERSIST_CONFIG, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      generalPurposeMiddleware,
      loggerMiddleWare(),
    ),
  devTools: !isAppInProd,
});
export const persistentStore = persistStore(store);

// typed redux default hooks

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

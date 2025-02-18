import { isAppInProd } from '@/lib/shared';
import { Middleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const loggerMiddleWare = (): Middleware => {
  if (isAppInProd == false) {
    return logger;
  }
  const mockMiddleWare: Middleware = () => (next) => async (action) => {
    next(action);
  };
  return mockMiddleWare;
};

export const generalPurposeMiddleware: Middleware =
  (api) => (next) => async (action) => {
    // add side effects here if you need stuff to happen when a particular action is dispatched and the logic
    // shouldn't sit inside a component or reducer.

    next(action);
  };

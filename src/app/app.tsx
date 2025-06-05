import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppRouter } from './router';
import { SuspenseLoader } from '@/components';
import { env } from '@/config';
import { theme } from '@/lib/material';
import { persistentStore, store } from '@/lib/store';

import './index.scss';

export const App = () => {
  console.warn('env.ENV_KEY', env.ENV_KEY);
  console.warn('env.API_URL', env.API_URL);
  return (
    <React.Suspense fallback={<SuspenseLoader />}>
      <Provider store={store}>
        <PersistGate persistor={persistentStore}>
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.Suspense>
  );
};

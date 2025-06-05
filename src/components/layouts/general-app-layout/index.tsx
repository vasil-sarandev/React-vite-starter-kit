import { Outlet } from 'react-router';
import { GeneralAppLayoutContextProvider } from './context';
import { GeneralAppLayoutDrawer } from './drawer';
import { Footer } from './footer';
import { Header } from './header';
import { Box } from '@/components/box';
import { useApp100vh } from '@/lib/shared';

import './index.scss';

export const GeneralAppLayout = () => {
  const minHeight = useApp100vh();
  return (
    <GeneralAppLayoutContextProvider>
      <div className="app-layout" style={{ minHeight: minHeight }}>
        <Header />
        <main className="app-layout__main">
          <Box sx={{ m: 2 }}>
            <Outlet />
          </Box>
        </main>
        <Footer />
      </div>
      <GeneralAppLayoutDrawer />
    </GeneralAppLayoutContextProvider>
  );
};

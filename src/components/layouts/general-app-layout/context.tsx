import { createContext, ReactNode, useContext, useState } from 'react';

interface IContextPayload {
  drawerOpen: boolean;
  setDrawerOpen: (p: boolean) => void;
  toggleDrawer: () => void;
}

const GeneralAppLayoutContext = createContext<IContextPayload>({
  drawerOpen: false,
  setDrawerOpen: () => {},
  toggleDrawer: () => {},
});

interface IProviderProps {
  defaultDrawerOpen?: boolean;
  children?: ReactNode;
}

export const GeneralAppLayoutContextProvider = ({
  children,
  defaultDrawerOpen = false,
}: IProviderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(defaultDrawerOpen);

  const toggleDrawer = () => setDrawerOpen(prev => !prev);

  return (
    <GeneralAppLayoutContext.Provider value={{ drawerOpen, setDrawerOpen, toggleDrawer }}>
      {children}
    </GeneralAppLayoutContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGeneralAppLayoutContext = () => useContext(GeneralAppLayoutContext);

import { ReactNode } from 'react';
import { Drawer as MaterialDrawer } from '@mui/material';
import { IAppComponentIdentityProps } from '@/lib/shared';

interface IProps extends IAppComponentIdentityProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Drawer = ({ children, open, onClose, id, className }: IProps) => {
  return (
    <MaterialDrawer open={open} onClose={onClose} id={id} className={className}>
      {children}
    </MaterialDrawer>
  );
};

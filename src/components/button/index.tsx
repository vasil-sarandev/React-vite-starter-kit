import MaterialButton from '@mui/material/Button';
import { OverridableStringUnion } from '@mui/types';

interface IProps {
  onClick: () => void;
  variant: OverridableStringUnion<'text' | 'outlined' | 'contained'>;
  children?: React.ReactNode;
}

export const Button = ({ onClick, children, variant }: IProps) => {
  return (
    <MaterialButton variant={variant} onClick={onClick}>
      {children}
    </MaterialButton>
  );
};

import { Box as MaterialBox, BoxProps } from '@mui/material';

interface IProps extends BoxProps {}

export const Box = ({ children, ...props }: IProps) => {
  return <MaterialBox {...props}>{children}</MaterialBox>;
};

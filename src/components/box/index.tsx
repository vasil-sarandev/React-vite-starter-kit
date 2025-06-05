import { Box as MaterialBox, BoxProps } from '@mui/material';

type IProps = BoxProps;

export const Box = ({ children, ...props }: IProps) => {
  return <MaterialBox {...props}>{children}</MaterialBox>;
};

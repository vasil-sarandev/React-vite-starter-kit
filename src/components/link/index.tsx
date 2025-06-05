import { LinkOwnProps, Link as MaterialLink } from '@mui/material';
import { ReactNode } from 'react';
import { IAppComponentIdentityProps } from '@/lib/shared';

interface IProps extends IAppComponentIdentityProps {
  href: string;
  color?: LinkOwnProps['color'];
  children?: ReactNode;
}

export const Link = ({ href, children, color = 'inherit', id, className }: IProps) => {
  return (
    <MaterialLink href={href} color={color} id={id} className={className}>
      {children}
    </MaterialLink>
  );
};

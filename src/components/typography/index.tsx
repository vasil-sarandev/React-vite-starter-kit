import { Typography as MaterialTypography, TypographyVariant } from '@mui/material';

interface IProps {
  variant: TypographyVariant;
  children: React.ReactNode;
}
export const Typography = ({ variant, children }: IProps) => {
  return <MaterialTypography variant={variant}>{children}</MaterialTypography>;
};

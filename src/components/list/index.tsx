import {
  ListOwnProps,
  List as MaterialList,
  ListItemBaseProps,
  ListItem as MaterialListItem,
  ListItemButtonBaseProps,
  ListItemButton as MaterialListItemButton,
  ListItemTextProps,
  ListItemText as MaterialListItemText,
  ListItemIconProps,
  ListItemIcon as MaterialListItemIcon,
} from '@mui/material';
import { IAppComponentIdentityProps } from '@/lib/shared';

type IListProps = IAppComponentIdentityProps & ListOwnProps & {};
type IListItemProps = IAppComponentIdentityProps & ListItemBaseProps & {};
type IListItemButtonProps = IAppComponentIdentityProps & ListItemButtonBaseProps & {};
type IListItemTextProps = IAppComponentIdentityProps & ListItemTextProps & {};
type IListItemIconProps = IAppComponentIdentityProps & ListItemIconProps & {};

const List = ({ ...props }: IListProps) => {
  return <MaterialList {...props}>{props.children}</MaterialList>;
};

const ListItem = ({ children, ...rest }: IListItemProps) => {
  return <MaterialListItem {...rest}>{children}</MaterialListItem>;
};

const ListItemButton = ({ children, ...rest }: IListItemButtonProps) => {
  return <MaterialListItemButton {...rest}>{children}</MaterialListItemButton>;
};

const ListItemText = ({ children, ...rest }: IListItemTextProps) => {
  return <MaterialListItemText {...rest}>{children}</MaterialListItemText>;
};

const ListItemIcon = ({ children, ...rest }: IListItemIconProps) => {
  return <MaterialListItemIcon {...rest}>{children}</MaterialListItemIcon>;
};

export { List, ListItem, ListItemButton, ListItemText, ListItemIcon };

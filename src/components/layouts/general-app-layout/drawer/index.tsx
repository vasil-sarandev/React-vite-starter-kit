import HomeIcon from '@mui/icons-material/Home';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useGeneralAppLayoutContext } from '../context';
import {
  Drawer,
  Box,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@/components';
import { paths } from '@/config';

import './index.scss';

interface IAppDrawerMenuLinks {
  label: string;
  href: string;
  Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & { muiName: string };
}
const APP_DRAWER_MENU_LINKS: IAppDrawerMenuLinks[] = [
  { label: 'Dashboard', href: paths.app.dashboard.getHref(), Icon: HomeIcon },
];

export const GeneralAppLayoutDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useGeneralAppLayoutContext();

  const handleClose = () => setDrawerOpen(false);

  return (
    <Drawer open={drawerOpen} onClose={handleClose} className="app-layout-drawer">
      <Box
        role="presentation"
        className="app-layout-drawer__inner"
        sx={{ pt: 4, pb: 4 }}
        onClick={handleClose}
      >
        <List className="app-layout-drawer__menu-list">
          {APP_DRAWER_MENU_LINKS.map(item => (
            <Link href={item.href} key={item.label} className="app-layout-drawer__menu-link">
              <ListItem className="app-layout-drawer__menu-item">
                <ListItemButton disableGutters>
                  <ListItemIcon>
                    <item.Icon className="app-layout-drawer__menu-icon" />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
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
import { useGeneralAppLayoutContext } from '../context';

import './index.scss';

interface IAppDrawerMenuLinks {
  label: string;
  href: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
}
const APP_DRAWER_MENU_LINKS: IAppDrawerMenuLinks[] = [
  { label: 'Patients', href: paths.app.patients.getHref(), Icon: HomeIcon },
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
          {APP_DRAWER_MENU_LINKS.map((item) => (
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

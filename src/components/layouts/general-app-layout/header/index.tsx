import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useGeneralAppLayoutContext } from '../context';
import { Typography, Box } from '@/components';
import { CloudAdminUser } from '@/lib/auth';
import { useAppSelector } from '@/lib/store';

import './index.scss';

export const Header = () => {
  // the app layout is protected so we can safely cast this.
  const user = useAppSelector(state => state.auth.user) as CloudAdminUser;

  const { toggleDrawer } = useGeneralAppLayoutContext();

  const handleLogout = () => {
    alert('TODO');
  };

  return (
    <Box className="app-layout-header" sx={{ p: 2 }}>
      <div className="app-layout-header__left">
        <MenuIcon className="app-layout-header__menu-icon" onClick={toggleDrawer} />
        <Box className="app-layout-header__logo" sx={{ ml: 1 }}>
          <Typography variant="h6">Cloud Admin</Typography>
        </Box>
      </div>
      <div className="app-layout-header__right">
        <Box className="app-layout-header__username" sx={{ mr: 1 }}>
          <Typography variant="body2">{user.email}</Typography>
        </Box>
        <LogoutIcon className="app-layout-header__logout-icon" onClick={handleLogout} />
      </div>
    </Box>
  );
};

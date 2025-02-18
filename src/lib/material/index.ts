import { createTheme } from '@mui/material';
import {
  APP_THEME_PRIMARY_COLOR_MAIN,
  APP_THEME_SECONDARY_COLOR_MAIN,
  APP_THEME_SPACING,
} from '@/config/theme';

export const theme = createTheme({
  spacing: APP_THEME_SPACING,
  palette: {
    primary: {
      main: APP_THEME_PRIMARY_COLOR_MAIN,
    },
    secondary: {
      main: APP_THEME_SECONDARY_COLOR_MAIN,
    },
  },
});

import { Box, Typography } from '@/components';

import './index.scss';

export const Footer = () => {
  return (
    <Box className="app-layout-footer" sx={{ p: 2 }}>
      <Typography variant="body2">
        &copy; Inspire Medical Systems, Inc. {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

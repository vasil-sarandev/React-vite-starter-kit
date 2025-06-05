import { Navigate, useLocation } from 'react-router';
import { paths } from '@/config';
import { CloudAdminUserRoles } from '@/lib/auth';
import { useAppSelector } from '@/lib/store';

export const ProtectedRoute = ({
  children,
  roles = [CloudAdminUserRoles.Admin],
}: {
  children: React.ReactNode;
  roles?: Array<CloudAdminUserRoles>;
}) => {
  const user = useAppSelector(state => state.auth.user);
  // TODO: get user roles here
  const userRoles = [CloudAdminUserRoles.Admin];
  const location = useLocation();

  if (!user) {
    return <Navigate to={paths.auth.login.getHref(location.pathname)} replace />;
  }

  if (roles.some(role => !userRoles.includes(role))) {
    console.error('user is unauthorized to access the page.');
    return <Navigate to={paths.auth.login.getHref(location.pathname)} replace />;
  }

  return children;
};

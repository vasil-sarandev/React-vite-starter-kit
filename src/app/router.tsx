import { useMemo, lazy } from 'react';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { GeneralAppLayout, ProtectedRoute } from '@/components';
import { paths } from '@/config';

const appBrowserRouterConfig: Array<RouteObject> = [
  // no public homepage added, just redirecting to dashboard.
  {
    path: paths.home.path,
    element: <Navigate to={paths.app.dashboard.getHref()} />,
  },
  {
    path: paths.auth.login.path,
    Component: lazy(() => import('./pages/login')),
  },
  {
    path: paths.app.root.path,
    element: (
      <ProtectedRoute>
        <GeneralAppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: paths.app.dashboard.path,
        Component: lazy(() => import('./pages/dashboard')),
      },
      {
        path: paths.app.product.path,
        Component: lazy(() => import('./pages/product')),
      },
    ],
  },
  {
    path: '*',
    Component: lazy(() => import('./pages/not-found')),
  },
];

export const AppRouter = () => {
  const router = useMemo(() => createBrowserRouter(appBrowserRouterConfig), []);

  return <RouterProvider router={router} />;
};

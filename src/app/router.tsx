import { useMemo, lazy } from 'react';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { paths } from '@/config';
import { GeneralAppLayout, ProtectedRoute } from '@/components';

const appBrowserRouterConfig: Array<RouteObject> = [
  // no public homepage, just redirecting to patients for now unless business requirements change.
  {
    path: paths.home.path,
    element: <Navigate to={paths.app.patients.getHref()} />,
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
        path: paths.app.patients.path,
        Component: lazy(() => import('./pages/patients')),
      },
      {
        path: paths.app.patient.path,
        Component: lazy(() => import('./pages/patient')),
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

/// src\routes.tsx

import { RouteObject } from 'react-router-dom';

import { PAGES_ROUTES } from './common';
import { AppLayout } from './layouts';
import { HomePage, LoginPage, ProfilePage } from './pages';

export const routes: RouteObject[] = [
  {
    path: PAGES_ROUTES.AUTH,
    element: <LoginPage />,
  },
  {
    path: PAGES_ROUTES.HOME,
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
  {
    path: PAGES_ROUTES.PROFILE,
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <ProfilePage />,
      },
    ],
  },
];

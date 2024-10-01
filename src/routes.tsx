import { RouteObject } from 'react-router-dom';

import { HomePage, LoginPage } from './pages';

export const routes: RouteObject[] = [
  {
    path: '',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

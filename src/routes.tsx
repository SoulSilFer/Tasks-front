import { RouteObject } from 'react-router-dom';

import { HomePage } from './pages';

export const routes: RouteObject[] = [
  {
    path: '',
    element: <HomePage />,
  },
];

import { FC, lazy } from 'react';

import { useRoutes } from 'react-router-dom';

import { routeList } from '@/data/constant/navs';
import LayoutComponent from '@/layout';
import { Login, Profile } from '@/pages';
import { Cart, Home } from '@/pages';

const NotFound = lazy(() => import('@/pages/not-found'));

const routes = [
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      ...routeList,
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;

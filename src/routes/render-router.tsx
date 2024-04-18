import { FC, lazy } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import { LOGIN_PATH } from '@/data';
import { routeList } from '@/data/constant/navs';
import LayoutComponent from '@/layout';
import { GroupDetail, Login, PostDetail } from '@/pages';

const NotFound = lazy(() => import('@/pages/not-found'));

const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '',
        element: <Navigate to={LOGIN_PATH} />,
      },
      ...routeList,
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'group/:id',
        element: <GroupDetail />,
      },
      {
        path: `home/posts/:id`,
        element: <PostDetail />,
      },
      {
        path: `profile/posts/:id`,
        element: <PostDetail />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;

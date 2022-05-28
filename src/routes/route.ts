import * as React from 'react';

import { Order, Settings } from '@/page';

interface IRoute {
  path: string;
  Component: React.FC;
  routes?: any;
  isCache?: boolean;
}

const routes: IRoute[] = [
  {
    path: '/',
    Component: Order,
  },
  {
    path: '/settings',
    Component: Settings,
  },
];

export default routes;

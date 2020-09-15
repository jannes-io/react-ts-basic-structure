import React from 'react';
import {
  Dashboard as DashboardIcon,
  Layers as LayerIcon,
  BarChart as ChartIcon,
  Info as InfoIcon,
} from '@material-ui/icons';
import Layout from './Layout';
import ExampleContainer from './Containers/ExampleContainer';

export interface Route {
  name: string;
  path: string;
  exact: boolean;
  hidden: boolean;
  icon: React.ReactElement | null;
  component: React.FC<{
    location: any,
    match: any,
  }>;
}

export interface RouteSection {
  name: string;
  hidden: boolean;
  routes: {
    [key: string]: Route;
  };
}

export type RouteMap = { [key: string]: RouteSection };

const routes: RouteMap = {
  default: {
    name: '',
    hidden: false,
    routes: {
      dashboard: {
        name: 'DashboardScreen',
        path: '/',
        exact: true,
        hidden: false,
        icon: <DashboardIcon />,
        component: () => <Layout><ExampleContainer /></Layout>,
      },
      security: {
        name: 'Layers',
        path: '/layers',
        exact: false,
        hidden: false,
        icon: <LayerIcon />,
        component: () => <Layout><ExampleContainer /></Layout>,
      },
      users: {
        name: 'Charts',
        path: '/charts',
        exact: true,
        hidden: false,
        icon: <ChartIcon />,
        component: () => <Layout><ExampleContainer /></Layout>,
      },
    },
  },
  help: {
    name: 'Help section',
    hidden: false,
    routes: {
      help: {
        name: 'Help',
        path: '/help',
        exact: true,
        hidden: false,
        icon: <InfoIcon />,
        component: () => <Layout><ExampleContainer /></Layout>,
      },
    },
  },
  hidden: {
    name: 'hidden',
    hidden: true,
    routes: {
      withParams: {
        name: 'With Params',
        path: '/with-params/:param',
        exact: false,
        hidden: true,
        icon: null,
        component: ({ match }) => <Layout><ExampleContainer match={match} /></Layout>,
      },
    },
  },
};
export default routes;

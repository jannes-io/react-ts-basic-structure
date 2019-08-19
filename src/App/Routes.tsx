import React from 'react';
import Layout from './Layout';
import ExampleContainer from './Containers/ExampleContainer';
import {
  Dashboard as DashboardIcon,
  Layers as LayerIcon,
  BarChart as ChartIcon,
  Info as InfoIcon,
} from '@material-ui/icons';

export interface Route {
  name: string;
  path: string;
  exact: boolean;
  hidden: boolean;
  icon: React.ReactElement | null;
  component: React.FunctionComponent<{
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
        icon: <DashboardIcon/>,
        component: () =>
          <Layout routes={routes} children={<ExampleContainer/>}/>,
      },
      security: {
        name: 'Layers',
        path: '/layers',
        exact: false,
        hidden: false,
        icon: <LayerIcon/>,
        component: () => <Layout routes={routes} children={<ExampleContainer/>}/>,
      },
      users: {
        name: 'Charts',
        path: '/charts',
        exact: true,
        hidden: false,
        icon: <ChartIcon/>,
        component: () => <Layout routes={routes} children={<ExampleContainer/>}/>,
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
        icon: <InfoIcon/>,
        component: () => <Layout routes={routes} children={<ExampleContainer/>}/>,
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
        component: props =>
          <Layout routes={routes} children={<ExampleContainer {...props} />}/>,
      },
    },
  },
};
export default routes;

import React from 'react';
import Layout from './Layout';
import ExampleContainer from './Containers/ExampleContainer';
import {
  Dashboard as DashboardIcon,
  Layers as LayerIcon,
  BarChart as ChartIcon,
  Info as InfoIcon,
} from '@material-ui/icons';

export type Route = {
  name: string,
  path: string,
  exact: boolean,
  hidden: boolean,
  icon: React.ReactElement | null,
  component: React.FunctionComponent,
};

export type RouteSection = {
  name: string,
  routes: Route[],
};

export type RouteMap = RouteSection[];

const routes: RouteMap = [{
  name: '',
  routes: [{
    name: 'Overview',
    path: '/',
    exact: true,
    hidden: false,
    icon: <DashboardIcon/>,
    component: () => <Layout routes={routes} children={<ExampleContainer/>}/>,
  }, {
    name: 'Charts',
    path: '/charts',
    exact: false,
    hidden: false,
    icon: <ChartIcon/>,
    component: () => <Layout routes={routes} children={<ExampleContainer/>}/>,
  }, {
    name: 'Stats',
    path: '/stats',
    exact: false,
    hidden: false,
    icon: <LayerIcon/>,
    component: () => <Layout routes={routes} children={<ExampleContainer/>}/>,
  }],
}, {
  name: 'This is a section',
  routes: [{
    name: 'Help',
    path: '/help',
    exact: false,
    hidden: false,
    icon: <InfoIcon/>,
    component: () => <Layout routes={routes} children={<ExampleContainer/>}/>,
  }],
}];

export default routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import Routes, { Route as RouteType, RouteSection as RouteSectionType } from './Routes';
import NotFoundScreen from './Containers/NotFoundScreen';

// Edit theme
const theme = createMuiTheme({
  /** Customize theme here **/
});

const createRoutes = () => {
  const convertRoute = ((route: RouteType) => <Route
    key={route.path}
    path={route.path}
    exact={route.exact}
    component={route.component}
  />);

  const concatRouteSection = (
    acc: React.ReactElement[],
    section: RouteSectionType,
  ) => acc.concat(acc, Object.values(section.routes).map(convertRoute));

  return <Switch>
    {Object.values(Routes).reduce(concatRouteSection, [])}
    <Route component={NotFoundScreen} />
  </Switch>;
};

const App = () => (
  <MuiThemeProvider theme={theme}>
    {createRoutes()}
  </MuiThemeProvider>
);

export default App;

import React from 'react';
import Routes, { Route as RouteType, RouteSection as RouteSectionType } from './Routes';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

// Edit theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#077485',
    },
  },
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
  ) => acc.concat(acc, section.routes.map(convertRoute));

  return <Switch>
    {Routes.reduce(concatRouteSection, [])}
  </Switch>;
};

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      {createRoutes()}
    </MuiThemeProvider>
  );
};

export default App;

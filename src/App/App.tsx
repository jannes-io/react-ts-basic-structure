import React from 'react';
import Layout from './Layout';
import ExampleContainer from './Containers/ExampleContainer';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

// Edit theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3d405e',
    },
  },
});

const Index = () => {
  return <Layout children={<ExampleContainer/>}/>;
};

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path={'/'} component={Index}/>
      </Switch>
    </MuiThemeProvider>
  );
};

export default App;

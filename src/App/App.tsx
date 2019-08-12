import React from 'react';
import LoginScreen from './Containers/LoginScreen';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3d405e',
    },
  },
});

const App: React.FunctionComponent = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <LoginScreen/>
    </MuiThemeProvider>
  );
};

export default App;

import React from 'react';
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

const App: React.FunctionComponent = () => {
  return (
    <MuiThemeProvider theme={theme}>
      // Rest of your app goes here :)
    </MuiThemeProvider>
  );
};

export default App;

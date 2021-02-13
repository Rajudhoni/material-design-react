import React from 'react';
import Header from './ui/Header';
import {ThemeProvider } from '@material-ui/core/styles';

import Theme from './ui/theme';


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      hello
    </ThemeProvider>
  );
}

export default App;

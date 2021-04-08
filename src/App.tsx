import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {Container} from './style/globalStyle';
import {light} from './style/themes';
import {ThemeProvider} from 'styled-components/native';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Container>
        <StatusBar barStyle="default" animated />
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default App;

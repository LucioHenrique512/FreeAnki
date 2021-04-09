import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {Container} from './style/globalStyle';
import {light, dark} from './style/themes';
import {ThemeProvider} from 'styled-components/native';

const App = () => {
  return (
    <ThemeProvider theme={false ? dark : light}>
      <Container>
        <StatusBar barStyle="default" animated backgroundColor="#6C5CE7" />
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default App;

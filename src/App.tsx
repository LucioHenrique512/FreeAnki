import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {Container} from './style/globalStyle';
import {light, dark} from './style/themes';
import {ThemeProvider} from 'styled-components/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {Text} from './components';
import './i18n';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppearanceProvider>
          <ThemeProvider theme={colorScheme === 'dark' ? dark : light}>
            <Container>
              <StatusBar
                barStyle="default"
                animated
                backgroundColor="#6C5CE7"
              />
              <Routes />
            </Container>
            <Text />
          </ThemeProvider>
        </AppearanceProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

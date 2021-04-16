import React from 'react';
import 'react-native-gesture-handler';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import StartRoute from './startroute';
import HomeRoute from './homeroute';
import {StoreType} from '../redux/reducers';
import {SessionStateType} from '../redux/reducers/session';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const PrivateStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="homepage" component={HomeRoute} />
    </Stack.Navigator>
  );
};

const PublicStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="startpage" component={StartRoute} />
    </Stack.Navigator>
  );
};

export default function Routes() {
  const {isAuthenticed}: any = useSelector((store: StoreType) => store.session);

  return (
    <NavigationContainer theme={theme}>
      {isAuthenticed ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
}

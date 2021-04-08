import React from 'react';
import 'react-native-gesture-handler';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartRoute from './startroute';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const PublicStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="startpage" component={StartRoute} />
    </Stack.Navigator>
  );
};

export default function Routes() {
  return (
    <NavigationContainer theme={theme}>
      <PublicStack />
    </NavigationContainer>
  );
}

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartRoute from './startroute';

const Stack = createStackNavigator();

const PublicStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="startpage" component={StartRoute} />
    </Stack.Navigator>
  );
};

export default function Routes() {
  return (
    <NavigationContainer>
      <PublicStack />
    </NavigationContainer>
  );
}

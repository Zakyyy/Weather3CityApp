import { createStackNavigator } from '@react-navigation/stack';
import CitiesScreen from '../screens/CitiesScreen';
import * as React from 'react';
import SingleCityScreen from '../screens/SingleCityScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CitiesScreen} />
      <Stack.Screen name="Details" component={SingleCityScreen} />
    </Stack.Navigator>
  );
}
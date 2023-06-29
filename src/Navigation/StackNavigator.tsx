import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { Screen3 } from '../screens/Screen3';
import { PersonScreen } from '../screens/PersonScreen';

export type RootStackparams = {
  Screen1: undefined, 
  Screen2: undefined,
  Screen3: undefined,
  PersonScreen: { id: number, name: string},
}

const Stack = createStackNavigator<RootStackparams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Screen1" options= {{ title:"Screen 1" }} component={Screen1} />
      <Stack.Screen name="Screen2" options= {{ title:"Screen 2" }} component={Screen2} />
      <Stack.Screen name="Screen3" options= {{ title:"Screen 3" }} component={Screen3} />
      <Stack.Screen name="PersonScreen" options= {{ title:"Person " }} component={PersonScreen} />
    </Stack.Navigator>
  );
}
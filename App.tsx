import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StackNavigator } from './src/Navigation/StackNavigator';


export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/> 
    </NavigationContainer>
  )
}
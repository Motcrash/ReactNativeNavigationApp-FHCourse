import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
// import { StackNavigator } from './src/Navigation/StackNavigator';
import { DraweNavigator } from './src/Navigation/DrawerNavigator';


export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/>  */}
      <DraweNavigator />
    </NavigationContainer>
  )
}
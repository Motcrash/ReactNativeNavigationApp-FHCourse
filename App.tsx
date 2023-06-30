import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
// import { StackNavigator } from './src/Navigation/StackNavigator';
// import { DraweNavigator } from './src/Navigation/DrawerNavigator';
import { DrawerNav } from './src/Navigation/DrawerNav';


export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/>  */}
      <DrawerNav />
    </NavigationContainer>
  )
}
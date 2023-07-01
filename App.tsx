import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
// import { StackNavigator } from './src/Navigation/StackNavigator';
// import { DraweNavigator } from './src/Navigation/DrawerNavigator';
import { DrawerNav } from './src/Navigation/DrawerNav';
import { AuthProvider } from './src/Context/AuthContext';


export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/>  */}
        <DrawerNav />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ( { children } : {children: JSX.Element }) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
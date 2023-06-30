import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { Button, useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator( );

export const DraweNavigator = ( ) => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title:'home'}} component={ StackNavigator } />
      <Drawer.Screen name="SettingScreen" options={{ title:'settings'}} component={SettingScreen} />
    </Drawer.Navigator>
  );
}
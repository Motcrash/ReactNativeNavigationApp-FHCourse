import React from 'react';

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { Text, useWindowDimensions, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator( );

export const DrawerNav = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={ ( props ) => <DrawerConten { ...props } />}
    > 
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>

  );
}

const DrawerConten = ( { navigation }: DrawerContentComponentProps): JSX.Element => {
  return (
    <DrawerContentScrollView>
      <View style= { styles.avatarContainer }> 
        <Image
          source= {{
            uri: 'https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg'
          }}
          style = { styles.avatar }
        />
      </View>

      {/* Menu options */}

      <View style={ styles.menuContainer}> 
          <TouchableOpacity style={ styles.menuButton}
            onPress={ () => navigation.navigate('StackNavigator')}  
          >
            <Text style = { styles.menuText}>Stak Nav</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ styles.menuButton}
            onPress={ () => navigation.navigate('SettingScreen')}  
          >
            <Text style = { styles.menuText}>Settings</Text>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}
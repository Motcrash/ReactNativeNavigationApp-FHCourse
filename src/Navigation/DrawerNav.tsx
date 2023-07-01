import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { SettingScreen } from '../screens/SettingScreen';
import { Text, useWindowDimensions, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator( );

export const DrawerNav = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={ ({ route }) => ({
        drawerType: width >= 768 ? 'permanent' : 'front',
        drawerLabel: () => {
          const iconName:string = ''
          switch ( route.name ) {
            case 'Tabs':
                return 

            case 'Settings':
                return <Text><Icon name="people-outline" size={20} color="#900" /></Text>

            default:
              break;
          }

          // return <Text><Icon name={ iconName } size={20} color="#900" /></Text>
      }
      })}
      drawerContent={ ( props ) => <DrawerContent { ...props } />}
    > 
      <Drawer.Screen name="Tabs" component={ Tabs }/>
      <Drawer.Screen name="Settings" component={ SettingScreen } />
    </Drawer.Navigator>

  );
}

const DrawerContent = ( { navigation }: DrawerContentComponentProps): JSX.Element => {
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
            onPress={ () => navigation.navigate('Tabs')}  
          >
            <View style= { styles.drawerItem }>
              <Text><Icon name="file-tray-full-outline" size={30} color="#7f440a" /> </Text>
              <Text style = { styles.menuText}> Tabs</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={ styles.menuButton}
            onPress={ () => navigation.navigate('Settings')}  
          >
            <View style= { styles.drawerItem }>
              <Text><Icon name="settings-outline" size={30} color="#7f440a" /> </Text>
              <Text style = { styles.menuText}> Settings</Text>
            </View>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}
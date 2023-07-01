import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNav = () => {

    const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
        style={{
            padding: top
        }}
        sceneContainerStyle = {{
            backgroundColor: 'white'
        }}
        screenOptions={ ({ route }) => ({
            tabBarShowIcon: true,
            tabBarIndicatorStyle:{
                backgroundColor: colors.primary,
            },
            tabBarStyle:{
                shadowColor: 'transparent',
                elevation: 0,
            },
            tabBarIcon: ({ color }) => {
  
                let iconName: string = '';
                  switch ( route.name ) {
                    case 'Chat':
                      iconName = 'Ch'
                      break;
        
                    case 'Contact':
                      iconName = 'Co'
                      break;
        
                    case 'Album':
                      iconName = 'Al'
                      break;
        
                    default:
                      break;
                  }
        
                return <Text style={{ color }}>{ iconName }</Text>
              }
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
}
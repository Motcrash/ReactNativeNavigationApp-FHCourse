import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
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
            tabBarIcon: () => {
                let iconName: string = '';
                switch ( route.name ) {
                case 'Chat':
                    iconName = 'chatbox-ellipses-outline'
                    break;
    
                case 'Contact':
                    iconName = 'people-outline'
                    break;
    
                case 'Album':
                    iconName = 'albums-outline'
                    break;
    
                default:
                    break;
                }
                return <Text><Icon name={ iconName } size={20} color="#62462a" /></Text>
            }
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
}
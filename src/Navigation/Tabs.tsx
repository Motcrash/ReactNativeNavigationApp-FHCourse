import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNav } from './TopTabNav';


export const Tabs = () => {
  return Platform.OS === 'ios'
    ?<TabsIOS/>
    :<TabsAndroid/>
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle = {{
        backgroundColor: colors.primary
      }}
      screenOptions={ ( {route} ) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle:{
          fontSize: 15,
        },
        tabBarIcon: ({ color, focused }) => {
  
          let iconName: string = '';
            switch ( route.name ) {
              case 'Tab1Screen':
                iconName = 'T1'
                break;
  
              case 'Tab2Screen':
                iconName = 'T2'
                break;
  
              case 'StackNavigator':
                iconName = 'St'
                break;
  
              default:
                break;
            }
  
          return <Text style={{ color }}>{ iconName }</Text>
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options= {{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="Tab2Screen" options= {{ title: 'Tab2' }} component={ TopTabNav } />
      <BottomTabAndroid.Screen name="StackNavigator" options= {{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
    initialRouteName='TopTabNav'
    screenOptions={ ( {route} ) => ({
      tabBarActiveTintColor: colors.primary,
      tabBarStyle: {
        borderTopColor: colors.primary,
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarLabelStyle:{
        fontSize: 15,
      },
      tabBarIcon: ({ color, focused, size }) => {

        let iconName: string = '';
          switch ( route.name ) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;

            case 'TopTabNav':
              iconName = 'T2'
              break;

            case 'StackNavigator':
              iconName = 'St'
              break;

            default:
              break;
          }

        return <Text style={{ color }}>{ iconName }</Text>
      }
    })}
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}

    >
      {/* <Tab.Screen name="Tab1Screen" options= {{ title: 'Tab1', tabBarIcon: ( props ) => <Text style= {{ color: props.color}}>T1</Text>}} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options= {{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="TopTabNav" options= {{ title: 'Tab2' }} component={ TopTabNav } />
      <BottomTabIOS.Screen name="StackNavigator" options= {{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
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
        tabBarIcon: () => {
          let iconName: string = '';
          switch ( route.name ) {
          case 'Tab1':
              iconName = 'apps-outline'
              break;

          case 'Tab2':
              iconName = 'ellipsis-horizontal-outline'
              break;

          case 'StackNavigator':
              iconName = 'file-tray-stacked-outline'
              break;

          default:
              break;
          }
          return <Text><Icon name={ iconName } size={20} color="black" /></Text>
      }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1" options= {{ title: 'Icons' }} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="Tab2" options= {{ title: 'Top Nav' }} component={ TopTabNav } />
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
      tabBarIcon: ({ color }) => {

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
      {/* <Tab.Screen name="Tab1" options= {{ title: 'Tab1', tabBarIcon: ( props ) => <Text style= {{ color: props.color}}>T1</Text>}} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1" options= {{ title: 'Icons' }} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="TopTabNav" options= {{ title: 'Top Nav' }} component={ TopTabNav } />
      <BottomTabIOS.Screen name="StackNavigator" options= {{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}
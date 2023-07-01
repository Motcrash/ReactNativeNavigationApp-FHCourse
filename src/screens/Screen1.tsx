import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Text, View } from 'react-native'
// import { StackScreenProps} from '@react-navigation/stack'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'

// interface Props extends StackScreenProps<any, any> {};
interface Props extends DrawerScreenProps<any, any> {};

export const Screen1 = ( { navigation }: Props ) => {

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      // headerLeft: () => (
      //   <TouchableOpacity
      //   onPress={ () => navigation.toggleDrawer() }
      //   >
      //     <Text><Icon name="menu-outline" size={40} color="black" /></Text>
      //   </TouchableOpacity>
      // )
    })
  }, [])

  return (
    <View style = { styles.globalMargin }>
        <Text style= { styles.title } >Screen 1</Text>    

        <TouchableOpacity
          onPress = { () => navigation.navigate('Screen2')}
          style= { styles.personBtn }
        >
          <Text style= { styles.personBtnText }>Screen 2</Text>
        </TouchableOpacity>

        <Text style={{
          marginVertical: 20,
          fontSize: 20,
        }}>
          Navigate with params
        </Text>

        <View style = {{ flexDirection: 'row'}}>
          <TouchableOpacity
            style = {{
              ...styles.btnScreens,
              backgroundColor: '#5856D6',
            }}
            onPress = { () => navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro'
            })}
          >
            <Icon name="person-circle-outline" size={40} color="white" />
            <Text style= { styles.btnScreenText }>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style = { styles.btnScreens }
            onPress = { () => navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Juan'
            })}
          >
            <Icon name="person-circle-outline" size={40} color="white" />
            <Text style= { styles.btnScreenText }>Juan</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}

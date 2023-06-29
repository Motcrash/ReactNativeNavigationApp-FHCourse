import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps} from '@react-navigation/stack'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any, any> {};

export const Screen1 = ( { navigation }: Props ) => {
  return (
    <View style = { styles.globalMargin }>
        <Text style= { styles.title } >Screen 1</Text>    

        <Button
            title = "Screen 2"
            onPress = { () => navigation.navigate('Screen2')}
        /> 

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
            <Text style= { styles.btnScreenText }>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style = { styles.btnScreens }
            onPress = { () => navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Juan'
            })}
          >
            <Text style= { styles.btnScreenText }>Juan</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}

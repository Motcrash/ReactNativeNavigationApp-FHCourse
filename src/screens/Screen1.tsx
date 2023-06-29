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

        <TouchableOpacity
          onPress = { () => navigation.navigate('PersonScreen', {
            id: 1,
            name: 'Pedro'
          })}
        >
          <Text>Pedro</Text>
        </TouchableOpacity>

    </View>
  )
}

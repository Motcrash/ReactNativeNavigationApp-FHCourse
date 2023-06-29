import React from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> {};

export const Screen3 = ( { navigation }: Props) => {
  return (
    <View style = { styles.globalMargin }>
        <Text style= { styles.title } >Screen 3</Text>   

        <Button
            title= "Regresar"
            onPress = { () => navigation.pop() }
        /> 

        <Button
            title= "Screen 1"
            onPress = { () => navigation.navigate('Screen1') }
        /> 

    </View>
  )
}

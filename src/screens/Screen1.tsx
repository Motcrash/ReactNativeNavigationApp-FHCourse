import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps} from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> {};

export const Screen1 = ( { navigation }: Props ) => {
  return (
    <View style = { styles.globalMargin }>
        <Text>Screen 1</Text>    

        <Button
            title = "Screen 2"
            onPress = { () => navigation.navigate('Screen2')}
        /> 
    </View>
  )
}

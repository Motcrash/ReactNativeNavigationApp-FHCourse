import React from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {};

export const Screen3 = ( { navigation }: Props) => {
  return (
    <View style = { styles.globalMargin }>
        <Text style= { styles.title } >Screen 3</Text>   

        <View style={{
          marginTop: 20,
          alignItems: 'center'
        }}>
          <TouchableOpacity
            onPress = { () => navigation.pop() }
            style= {{
              ...styles.personBtn,
              marginBottom: 20
            }}
          >
            <Text style= { styles.personBtnText }>Go back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress = { () => navigation.navigate('Screen1')}
            style= { styles.personBtn }
          >
            <Text style= { styles.personBtnText }>Screen 1</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}

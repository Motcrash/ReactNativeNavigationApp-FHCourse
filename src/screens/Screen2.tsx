import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

// interface Props extends StackScreenProps<any, any> {};
interface Props extends DrawerScreenProps<any, any> {};


export const Screen2 = ( { navigation }: Props ) => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Forced title',
      headerBackTitle: ''
    })
  }, [])
  

  return (
    <View style = { styles.globalMargin }>
      <Text style= { styles.title } >Screen 2</Text>    

      <TouchableOpacity
        onPress = { () => navigation.navigate('Screen3')}
        style= { styles.personBtn }
      >
        <Text style= { styles.personBtnText }>Screen 3</Text>
      </TouchableOpacity>

    </View>
  )
}

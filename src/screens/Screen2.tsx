import React from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native';

export const Screen2 = () => {

  const navigator = useNavigation()

  return (
    <View style = { styles.globalMargin }>
        <Text>Screen 2</Text>   

        <Button
          title="Screen 3"
          onPress={ () => navigator.navigate('Screen3') }
        /> 
      
    </View>
  )
}

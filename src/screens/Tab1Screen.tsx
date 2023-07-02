import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen Effect')
  }, [])
  

  return (
    <View style = { styles.globalMargin }>
        <Text style= { styles.title }> Icons </Text>
        <View style = { styles.iconsContainer }>

          <Text><Icon name='add-outline' size={50} color="#62462a" /></Text>
          <Text><Icon name='alarm-outline' size={50} color="#62462a" /></Text>
          <Text><Icon name='albums-outline' size={50} color="#62462a" /></Text>
          <Text><Icon name='alert-outline' size={50} color="#62462a" /></Text>
          <Text><Icon name='alert-circle' size={50} color="#62462a" /></Text>
          <Text><Icon name='at-outline' size={50} color="#62462a" /></Text>
          <Text><Icon name='checkmark-done-circle-outline' size={50} color="#62462a" /></Text>
          <Text><Icon name='bicycle-outline' size={50} color="#62462a" /></Text>
          <Text><Icon name='beer-outline' size={50} color="#62462a" /></Text>
          
        </View>
    </View>
  )
}

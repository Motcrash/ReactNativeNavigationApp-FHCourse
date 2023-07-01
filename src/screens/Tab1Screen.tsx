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
        <Text><Icon name="airplane-outline" size={50} color="#900" /></Text>
    </View>
  )
}

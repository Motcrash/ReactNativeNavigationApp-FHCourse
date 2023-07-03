import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableIcon } from '../Components/TouchableIcon';

export const Tab1Screen = () => {

  useEffect(() => { 
    console.log('Tab1Screen Effect')
  }, [])
  

  return (
    <View style = { styles.globalMargin }>
        <Text style= { styles.title }> Icons </Text>
          
          <Text>
            <TouchableIcon iconName='add-outline'/>
            <TouchableIcon iconName='alarm-outline'/>
            <TouchableIcon iconName='albums-outline'/>
            <TouchableIcon iconName='alert-outline'/>
            <TouchableIcon iconName='alert-circle'/>
            <TouchableIcon iconName='at-outline'/>
            <TouchableIcon iconName='checkmark-done-circle-outline'/>
            <TouchableIcon iconName='bicycle-outline'/>
            <TouchableIcon iconName='beer-outline'/>
          </Text>
          
    </View>
  )
}

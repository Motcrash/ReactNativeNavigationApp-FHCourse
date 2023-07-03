import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

export const ChatScreen = () => {
  return (
    <View style= {{
      ...styles.globalMargin,
    }}>
        <Text style = {{
            ...styles.title,
            color: '#62462a' 
        }}>Chat</Text>
    </View>
  )
}

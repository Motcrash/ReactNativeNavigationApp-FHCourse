import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthContext } from '../Context/AuthContext'

export const AlbumScreen = () => {

  const { logout, authState } = useContext( AuthContext )

  return (
    <View style = { styles.globalMargin}>
      <Text style= {{
        ...styles.title,
        color: '#62462a',
      }}>ContactScreen</Text>

      {
        authState.isLoggedIn && (
          <TouchableOpacity
            onPress = { logout }
            style= { styles.personBtn }
          >
            <Text style= { styles.personBtnText }>Logout</Text>
          </TouchableOpacity>
        )
      }
      
    </View>
  )
}

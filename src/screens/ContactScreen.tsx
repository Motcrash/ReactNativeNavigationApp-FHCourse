import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../Context/AuthContext'

export const ContactScreen = () => {

  const { signIn, authState } = useContext( AuthContext )

  return (

    <View style = { styles.globalMargin}>
      <Text style= {{
        ...styles.title,
        color: '#62462a',
      }}>ContactScreen</Text>

      {
        !authState.isLoggedIn && (
          <TouchableOpacity
            onPress = { signIn }
            style= { styles.personBtn }
          >
            <Text style= { styles.personBtnText }>SignIn</Text>
          </TouchableOpacity>
        )
      }

    </View>
    
  )
}

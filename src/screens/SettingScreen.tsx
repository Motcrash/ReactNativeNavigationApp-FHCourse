import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, styles } from '../theme/appTheme';
import { AuthContext } from '../Context/AuthContext';

export const SettingScreen = () => {

  const insets = useSafeAreaInsets();

  const { authState } = useContext( AuthContext );

  return (
    <View style = {{ 
        ...styles.globalMargin,
        marginTop: insets.top + 20,
      }}>
        <Text style = { styles.title }>Settings Screen</Text>

        <Text>{ JSON.stringify(authState, null, 4) }</Text>

        {
          authState.favouriteIcon != undefined && (
            <View style = {{ alignContent: 'center'}}> 
              <Icon
                name= { authState.favouriteIcon! }
                size= { 150 }
                color = { colors.primary }
              />
            </View>
          )
        }

        
    </View>
  )
}

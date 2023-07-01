import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
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

        <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  )
}

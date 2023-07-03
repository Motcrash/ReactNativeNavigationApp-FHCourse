import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackparams } from '../Navigation/StackNavigator';
import { AuthContext } from '../Context/AuthContext';

interface Props extends StackScreenProps <RootStackparams, 'PersonScreen'> {};

export const PersonScreen = ( { route, navigation } : Props ) => {

  const { changeUsername } = useContext( AuthContext )

    const params = route.params
    
    useEffect(() => {
      navigation.setOptions({
        title: params.name
      })
    }, [])

    useEffect(() => {
      changeUsername( params.name )
    }, [])
    
    

  return (
    <View style = { styles.globalMargin } >
        <Text style = { styles.title } >
            {
                JSON.stringify(params, null, 3)
            }    
        </Text>    
    </View>
  )
}

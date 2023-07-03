import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../Context/AuthContext';

interface iconsProps {
    iconName: string,
}

export const TouchableIcon = ( { iconName }: iconsProps ) => {

    const { changeFavouriteIcon } = useContext( AuthContext )

  return (
    <TouchableOpacity
        onPress={ () => changeFavouriteIcon( iconName ) }
    >
        <Icon 
            name= { iconName }
            size= { 50 }
            color="#62462a"
        />

    </TouchableOpacity>
  )
}

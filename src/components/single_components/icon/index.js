import React from 'react'
import { StyleSheet, View, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

const IconCus = ({toucable, name, type, size, color, onPress}) => {

    if(toucable){
        return(
            <TouchableOpacity>
                <Icon name={name} type={type} size={size} color={color} onPress={onPress}/>
            </TouchableOpacity>
        )
    }

    return (
        <View>
             <Icon name={name} type={type} size={size} color={color} onPress={onPress}/>
        </View>
    )
}

export default IconCus

const styles = StyleSheet.create({})

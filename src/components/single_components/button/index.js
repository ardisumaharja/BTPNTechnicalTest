import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../../../utils'
import { TextCus } from '../../../components'

const ButtonCus = ({title, type, onPress, icon, disable}) => {
    return (
        <TouchableOpacity style={styles.Container} onPress={onPress}>
            <TextCus value={title} size={16} weight='600' color='white'/>
        </TouchableOpacity>
    )
}

export default ButtonCus

const styles = StyleSheet.create({
    Container:{
        borderRadius:10,
        backgroundColor:Colors.mainColors.blue1,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center',
    }
})

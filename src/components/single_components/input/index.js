import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { TextCus, Gap } from '../../../components'

const InputCus = ({title, value, onChangeText, secureTextEntry, disable, numeric}) => {
    return (
        <View>
            <TextCus value={title} color='#7D8797' size={16} weight='600'/>
            <Gap height={6}/>
            <TextInput 
                style={styles.TextInput}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                editable={!disable}
                selectTextOnFocus={!disable}
                keyboardType={numeric && 'numeric'}
            />
        </View>
    )
}

export default InputCus

const styles = StyleSheet.create({
    TextInput:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#dbdbdb',
        paddingHorizontal:12,
        paddingVertical:11,
        marginBottom:15,
    },
})

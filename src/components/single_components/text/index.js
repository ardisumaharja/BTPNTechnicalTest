import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TextCus = ({value, size, weight, color, style, bgColor, maxWidth, borderColor}) => {
    return (
        <View style={styles.Container(bgColor, borderColor)}>
            <Text style={styles.Text(size, weight, color, style, maxWidth)}>
                {value}
            </Text>
        </View>
    )
}

export default TextCus

const styles = StyleSheet.create({

    Container : (bgColor_, borderColor_) => ({
        borderWidth : borderColor_ == undefined ? null : 2,
        borderColor : borderColor_ == undefined ? null : borderColor_,
        borderRadius : 5,
        backgroundColor : borderColor_ == undefined ? null : bgColor_,
        paddingHorizontal : borderColor_ == undefined ? null : 8,
        paddingVertical : borderColor_ == undefined ? null : 6,
    }),

    Text : (size_, weight_, color_, style_, maxWidth_) => ({
        fontSize : size_ == undefined ? 14 : size_,
        fontWeight : weight_ == undefined ? 'normal' : weight_,
        color : color_ == undefined ? 'black' : color_,
        fontStyle : style_ == undefined ? 'normal' : style_,
        fontFamily : 'lucida grande',
        maxWidth : maxWidth_ == undefined ? null : maxWidth_, 
    })
})

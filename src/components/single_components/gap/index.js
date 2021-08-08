import React from 'react'
import { StyleSheet, View } from 'react-native'

const Gap = ({height, width}) => {
    return (
        <View style={styles.Container(height, width)}/>
    )
}

export default Gap

const styles = StyleSheet.create({
    Container : (height, width) => ({
        height : height == 'undefined' ? 0 : height, 
        width : width == 'undefined' ? 0 : width
    }) 
})

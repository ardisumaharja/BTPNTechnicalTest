import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { Colors } from '../../../utils'
import { TextCus, Gap } from '../../../components'

const Loading = () => {
    return (
        <View style={styles.Container}>
            <ActivityIndicator size="large" color={Colors.primary}/>
            <Gap height={10}/>
            <TextCus value='Loading...' size={18} color={Colors.text.primary}/>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    Container:{
        flex:1, 
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.loadingBackground,
        width:'100%',
        height:'100%',
    },
})

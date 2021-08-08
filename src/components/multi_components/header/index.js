import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconCus, TextCus } from '../../../components'

const Header = ({onPressLeft, onPressRight, title, type, docCatgory, image}) => {
    return (
        <View style={styles.Container}>
            {
                title != 'Contacts' ? 
                <IconCus name='arrow-back' type='ionicon' toucable onPress={onPressLeft}/>
                :
                <View/>
            }

            <View style={{flex:1,alignItems:'center'}}>
                <TextCus value={title} size={20} weight='600'/>
            </View>

            {
                title == 'Contacts' ? 
                <IconCus name='add' type='ionicon' size={24} toucable onPress={onPressRight}/>
                :
                <View style={{width:24}} />
            }

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        alignItems:'center',
    }
})

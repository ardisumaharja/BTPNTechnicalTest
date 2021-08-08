import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Image, View, Alert } from 'react-native'
import { Colors, DefaultStyles } from '../../utils'
import { Actions } from '../../actions'
import { DELETE_CONTACT, GET_CONTACTS } from '../../constants'
import { ContactList, Gap, Header } from '../../components'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import { ILNoDataAvailable } from '../../assets'
import { showMessage } from 'react-native-flash-message'

const Contacts = ({navigation}) => {

    const ref = useRef(false)
    const isFocused = useIsFocused()
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const [contacts, setContacts] = useState()
    const [isDelete, setIsDelete] = useState(isFocused && false)

    console.log('contacts_isFocused2', isFocused)

    useEffect(()=>{
        console.log('contacts_isFocused', isFocused)
        if(isFocused){
            Actions('GET','/contact',null,dispatch,GET_CONTACTS)
        }
    },[isFocused])

    useEffect(()=>{
        console.log('contacts', selector)
        if(selector.GetContacts.length != 0  && selector.GetContacts.data != undefined){
            if(selector.GetContacts.data.length != 0){
                setContacts(selector.GetContacts.data)
            }else{
                setContacts(null)
            }
        }else{
            setContacts(null)
        }
        if(isDelete){
            if(selector.DeleteContact.length != 0  && selector.DeleteContact.message != undefined){
                if(selector.GetContacts.message == 'contact deleted'){
                    showMessage({
                        message:selector.DeleteContact.message,
                        type:'default',
                        backgroundColor:Colors.success,
                    })
                    setIsDelete(false)
                }else{
                    showMessage({
                        message:selector.DeleteContact.message,
                        type:'default',
                        backgroundColor:Colors.error,
                    })
                    setIsDelete(false)
                }
            }
        }
        
    },[selector.GetContacts, selector.DeleteContact])

    const onSelect = (item) => {
        console.log("onSelect", item)
        navigation.navigate('ContactAdd',{item:item})
    }

    const onDelete = (item) => {
        console.log("onDelete", item)
       
        Alert.alert(
            "Are your sure?",
            "Are you sure you want to remove "+item.firstName+" "+item.lastName+" contact ?",
            [
                {
                    text : 'Yes',
                    onPress : () => {
                        Actions('DELETE','/contact/'+item.id,null,dispatch,DELETE_CONTACT)
                        setIsDelete(true)
                    }
                },
                {
                    text : 'No'
                }
            ]
        )
    }

    return (
        <View style={DefaultStyles.PageContainer}>
            <Header title='Contacts' onPressRight={()=>navigation.navigate('ContactAdd')}/>
            <Gap height={10}/>
            <View style={styles.BodyContainer}>
                {
                    contacts != null ? 
                    <ContactList data={contacts} onSelect={onSelect} onDelete={onDelete}/> 
                    :
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image style={{height:300,width:300}} source={ILNoDataAvailable} />
                    </View>
                }
                
            </View>
        </View>
    )
}

export default Contacts

const styles = StyleSheet.create({
    BodyContainer:{
        flex : 1,
    }
})

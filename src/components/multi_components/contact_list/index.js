import React, {useState} from 'react'
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { IconCus, TextCus, Gap } from '../../../components'
import { Colors } from '../../../utils'
import { ILNullPhoto } from '../../../assets'

const ContactList = ({data, onSelect, onDelete}) => {
    // console.log('ContactList', data)
    const Item = ({item, onSelect, onDelete}) => {

        const [image, setImage] = useState({uri:item.item.photo})

        const onError = (error) => {
            console.log('erroImage', error)
            setImage(ILNullPhoto)
        }

        console.log('ContactList_item', item)
        return (
            <TouchableOpacity style={styles.ItemContainer} onPress={()=>onSelect(item.item)} >
                <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
                    <View style={styles.AvatarWrapper}>
                        {/* <Image style={styles.Avatar} source={item.item.photo.length < 10 ? ILNullPhoto : {uri:item.item.photo}} onError={error=>console.log("errorImage", error)}/> */}
                        <Image style={styles.Avatar} source={image} onError={error=>onError(error)}/>
                    
                    </View>
                    <Gap width={10}/>
                    <TextCus value={item.item.firstName+' '+item.item.lastName} />
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginRight:20}}>
                    <IconCus name='delete' type='material' toucable size={24} onPress={()=>onDelete(item.item)}/>
                    {/* <Gap width={10}/>
                    <IconCus name='edit' type='material' toucable size={24} onPress={()=>onSelect(item.item)}/> */}
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={item=><Item item={item} onSelect={onSelect} onDelete={onDelete}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    ItemContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomWidth : 1,
        borderBottomColor : Colors.border,
        paddingVertical : 15,
    },
    Avatar : {
        height : 40, 
        width : 40,
        borderRadius : 40 / 2,  
    },
    AvatarWrapper : {
        height : 50, 
        width : 50,
        borderRadius : 50 / 2,
        borderWidth : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }
})

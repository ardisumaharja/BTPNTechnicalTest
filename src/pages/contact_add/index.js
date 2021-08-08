import React, {useState, useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import { Colors, DefaultStyles } from '../../utils'
import { ILNullPhoto } from '../../assets'
import { IconCus, Gap, TextCus, InputCus, ButtonCus, Header, ContactList } from '../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from 'react-native-image-picker'
import ImageResizer from 'react-native-image-resizer';
import { Actions } from '../../actions'
import { ADD_CONTACT, UPDATE_CONTACT } from '../../constants'
import { showMessage } from 'react-native-flash-message'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'

const ContactAdd = ({navigation, route}) => {
    const dataEdit = route.params;

    console.log("dataEdit", dataEdit);

    const ref = useRef(false)
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const [hasPhoto, setHasPhoto] = useState(false);
    const [image, setImage] = useState(dataEdit!=undefined?{uri:dataEdit.item.photo}:ILNullPhoto);
    const [form, setForm] = useState({
        firstName : dataEdit!=undefined?dataEdit.item.firstName:'',
        lastName : dataEdit!=undefined?dataEdit.item.lastName:'',
        age : dataEdit!=undefined?dataEdit.item.age.toString():'',
        photo : dataEdit!=undefined?dataEdit.item.photo:'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550'
    })

    const ImageGalleryLaunch = () => {
        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.launchImageLibrary(options, (res) => {
          console.log('Gallery_1 = ', res);
          if (res.didCancel) {
          } else if (res.error) {
          } else if (res.customButton) {
            alert(res.customButton);
          } else {
            compressImage(res.assets[0])
          }
        });
    }  

    const compressImage = (file) => {
        ImageResizer.createResizedImage(file.uri, 200, 200, 'JPEG', 100, 0, undefined, false, { mode:'contain', onlyScaleDown:false })
        .then(resizedImage => {
          setImage({uri:resizedImage.uri})
        })
        .catch(err => {
          console.log(err);
          return Alert.alert(
            'Unable to resize the photo',
            'Check the console for full the error message',
          );
        });
    }

    const onAddContact = () => {
        if(form.firstName.length != 0 && form.age.length != 0){
            if(form.age == 0){
                showMessage({
                    message:'Age must greater than 0',
                    type:'default',
                    backgroundColor:Colors.error
                })
            }
            else if(form.age > 100){
                showMessage({
                    message:'Age must less or equal than 100',
                    type:'default',
                    backgroundColor:Colors.error
                })
            }
            else if(form.firstName.length < 3){
                showMessage({
                    message:'First Name must greater or equal than 3 character',
                    type:'default',
                    backgroundColor:Colors.error
                })
            }
            else{
                if(dataEdit!=undefined){
                    Actions('PUT','/contact/'+dataEdit.item.id,form,dispatch,UPDATE_CONTACT)
                }else{
                    Actions('POST','/contact',form,dispatch,ADD_CONTACT)
                }
            }    
        }else{
            showMessage({
                message:'First Name and Age must be filled',
                type:'default',
                backgroundColor:Colors.error
            })
        }
    }

    const onError = (error) => {
        console.log('erroImage', error)
        setImage(ILNullPhoto)
    }

    useEffect(()=>{
        console.log('contactAdd', selector)
        if(ref.current){
            if(selector.AddContact.length != 0  && selector.AddContact.message != undefined){
                if(selector.AddContact.message == 'contact saved'){
                    showMessage({
                        message:selector.AddContact.message,
                        type:'default',
                        backgroundColor:Colors.success
                    })
                    navigation.goBack()
                }else{
                    showMessage({
                        message:selector.AddContact.message,
                        type:'default',
                        backgroundColor:Colors.error,
                    })
                }
            }

            if(dataEdit!=undefined){
                if(selector.UpdateContact.length != 0  && selector.UpdateContact.message != undefined){
                    if(selector.UpdateContact.message == 'Contact edited'){
                        showMessage({
                            message:selector.UpdateContact.message,
                            type:'default',
                            backgroundColor:Colors.success
                        })
                        navigation.goBack()
                    }else{
                        showMessage({
                            message:selector.UpdateContact.message,
                            type:'default',
                            backgroundColor:Colors.error
                        })
                    }
                }
            }
        }else{
            ref.current = true
        }
    },[selector.AddContact, selector.UpdateContact])

    return (
        <>
        <View style={DefaultStyles.PageContainer}>
        <KeyboardAwareScrollView>
            <Header title={dataEdit!=undefined?'Edit Contact':'Add Contact'} onPressLeft={()=>navigation.goBack()}/>
            <Gap height={20}/>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.AvatarWrapper} onPress={ImageGalleryLaunch}>
                    <Image source={image} style={styles.Avatar} onError={error=>onError(error)}/>
                    {
                        hasPhoto == false ? 
                            <View style={styles.AddPhotoContainer}>
                                <IconCus name='add-circle' type='ionicon' color={Colors.mainColors.blue1} size={36}/> 
                            </View>
                            : 
                            <View style={styles.AddPhoto}>
                                <IconCus name='close-circle' type='ionicon' color={Colors.mainColors.red1} size={36}/> 
                            </View>
                    }
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:20,paddingTop:30,flex:1}}>
                <View style={{flex:1}}>
                    <InputCus
                        title='First Name'
                        value={form.firstName}
                        onChangeText={value=>setForm({...form, firstName:value})}
                    />
                    <InputCus
                        title='Last Name'
                        value={form.lastName}
                        onChangeText={value=>setForm({...form, lastName:value})}
                    />
                    <InputCus
                        title='Age'
                        value={form.age}
                        onChangeText={value=>setForm({...form, age:value})}
                        numeric
                    />
                </View>
                <ButtonCus title={dataEdit!=undefined?'Update Contact':'Add Contact'} onPress={onAddContact}/>
            </View>
        </KeyboardAwareScrollView>
        </View>
        </>
    )
}

export default ContactAdd

const styles = StyleSheet.create({
    Avatar:{
        height:110,
        width:110,
        borderRadius:110/2,
    },
    AvatarWrapper:{
        height:130,
        width:130,
        borderWidth:1,
        borderColor:Colors.border,
        borderRadius:130/2,
        alignItems:"center",
        justifyContent:"center",
    },
    AddPhotoContainer:{
        position:"absolute",
        bottom:8,
        right:1,
        height:38,
        width:38,
        borderRadius:38/2,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
})

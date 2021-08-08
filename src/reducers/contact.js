import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS, SET_LOADING, UPDATE_CONTACT } from '../constants'

export const GetContacts = (state = [], action) =>{
    if(action.type === GET_CONTACTS) { 
        return action.value
    }
    return state
}
export const AddContact = (state = [], action) =>{
    if(action.type === ADD_CONTACT) { 
        return action.value
    }
    return state
}
export const DeleteContact = (state = [], action) =>{
    if(action.type === DELETE_CONTACT) { 
        return action.value
    }
    return state
}
export const UpdateContact = (state = [], action) =>{
    if(action.type === UPDATE_CONTACT) { 
        return action.value
    }
    return state
}
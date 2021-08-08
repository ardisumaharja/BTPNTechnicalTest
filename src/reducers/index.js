import { combineReducers, createStore } from 'redux'
import { Loading } from './process'
import { GetContacts, AddContact, UpdateContact, DeleteContact } from './contact'

const rootReducer = combineReducers({
    Loading, GetContacts, AddContact, UpdateContact, DeleteContact
})

const store = createStore(rootReducer)

export default store 
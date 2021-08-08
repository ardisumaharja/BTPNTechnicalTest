import { SET_LOADING } from '../constants'

export const Loading = (state = [], action) =>{
    if(action.type === SET_LOADING) { 
        return action.value
    }
    return state
}
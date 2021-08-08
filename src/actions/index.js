import { SET_LOADING } from "../constants"
import { URL_API } from "../env"

export const Actions = async (method, endPoint, data, dispatch, actionType) => {

    const body = data != null ? data : undefined

    console.log(actionType+"_body", endPoint)

    dispatch({type : SET_LOADING, value : true})
    try {
        fetch(`${URL_API}${endPoint}`,{
            method : method,
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(body),
        })
        .then(response => response.json())
        .then(data => {
            console.log('response_'+actionType+'_result',data)
            dispatch({type : actionType, value : data})
            dispatch({type : SET_LOADING, value : false})
        })
        .catch(error=>{
            dispatch({type : SET_LOADING, value : false})
            console.log('response_'+actionType+'_error_1', error)
        })
    } catch (error) {
        dispatch({type : SET_LOADING, value : false})
        console.log('response_'+actionType+'_error_2', error)
    }
}
import {LOGIN,LOGOUT} from "./types"

export const login=()=>dispatch=>{
    dispatch({
        type:LOGIN,
        payload:true
    })
}
export const logOut=()=>dispatch=>{
    dispatch({
        type:LOGOUT,
        payload:false
    })
}
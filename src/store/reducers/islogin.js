import { State } from "react-native-gesture-handler";
import { act } from "react-test-renderer";

import {LOGIN,LOGOUT} from "../actions/types"

const initialState=false;

export default function isLogin(state=initialState,action){
    switch(action.type){
        case LOGIN:
    return action.payload;
        case LOGOUT:
            return action.payload
    default :
    return state
    }

}
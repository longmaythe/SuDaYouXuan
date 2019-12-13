import {LIST_STATE_CHANGE,MINUS_STATE_NUM} from './type'

export function listStateChange(list){
    return {
        type : LIST_STATE_CHANGE,
        list
    }
}

export function minusStateNum(){
    return{
        type : MINUS_STATE_NUM
    }
}
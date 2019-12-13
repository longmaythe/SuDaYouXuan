// const LIST_STATE_CHANGE = "LIST_STATE_CHANGE"
// const MINUS_STATE_NUM = "MINUS_STATE_NUM"
import {LIST_STATE_CHANGE,MINUS_STATE_NUM} from './type'

const defineList = {
    list:'123'
}

export default (state=defineList,action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch( action.type ){
        case LIST_STATE_CHANGE: 
            newState.list = action.list
            return newState
        case MINUS_STATE_NUM :
             newState.num-=1
            return newState
        default:
            return state    
    }
}

// export function listStateChange(list){
//     return {
//         type : LIST_STATE_CHANGE,
//         list
//     }
// }

// export function minusStateNum(){
//     return{
//         type : MINUS_STATE_NUM
//     }
// }

// export function addStateNumAsync(){
//     return(dispatch)=>{
//         setTimeout(_=>{
//            dispatch(  addStateNum() )
//         },2000)
//     }
// }
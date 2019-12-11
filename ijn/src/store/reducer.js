const ADD_STATE_NUM = "ADD_STATE_NUM"
const MINUS_STATE_NUM = "MINUS_STATE_NUM"

export default (state={num:0},action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch( action.type ){
        case ADD_STATE_NUM: 
        console.log( newState.num )
            newState.num += 1
            return newState
        case MINUS_STATE_NUM :
             newState.num-=1
            return newState
        default:
            return state    
    }
}

export function addStateNum(){
    return {
        type : ADD_STATE_NUM
    }
}

export function minusStateNum(){
    return{
        type : MINUS_STATE_NUM
    }
}

export function addStateNumAsync(){
    return(dispatch)=>{
        setTimeout(_=>{
           dispatch(  addStateNum() )
        },2000)
    }
}
// import {createStore,applyMiddleware,combineReducers} from "redux"
// // import thunk from "redux-thunk"
// import reducer from "./reducer"

// // const reducers = combineReducers({num,todoList})合并多个reucer
// const store = createStore(reducer)

// export default store
import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"

const store = createStore(reducer,applyMiddleware( thunk ))

export default store
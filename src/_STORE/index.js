import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import {searchReducer} from '../_REDUCERS/search'
import thunk from 'redux-thunk'

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

export const mainState = {
    search: {
        results: []
    }
}

const mainReducer = combineReducers({
    search: searchReducer
})

export default function configureStore(){ return createStore(
    mainReducer,
    mainState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)}
// export default function configureStore() {
//     return createStore(mainReducer, mainState, composedEnhancer(applyMiddleware(thunk)))
// }
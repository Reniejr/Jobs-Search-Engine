import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import {searchReducer} from '../_REDUCERS/search'
import userReducer from '../_REDUCERS/user'
import {favReducer} from '../_REDUCERS/favourites'
import thunk from 'redux-thunk'

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const mainState = {
    search: {
        results: [],
        chunkResults:[]
    },
    user: {
        user:null
    },
    favs: {
        favourites:[]
    }
}

const mainReducer = combineReducers({
    search: searchReducer,
    user: userReducer,
    favs: favReducer
})

export default function configureStore() {
    return createStore(mainReducer, mainState, composedEnhancer(applyMiddleware(thunk)))
  }
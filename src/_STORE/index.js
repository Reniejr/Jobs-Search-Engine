import { createStore } from 'redux'
import {searchReducer} from '../_REDUCERS'

export const searchState = {
    search: '',
    description: '',
    location: '',
    lat: '',
    long: ''
}

export const searchConfig = () => createStore(
    searchReducer,
    searchState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
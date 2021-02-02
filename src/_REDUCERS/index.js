//SEARCH REDUCER
import { searchState } from '../_STORE'

export const searchReducer = (state = searchState, action) => {
    switch (action.type) {

        case 'SEARCH_ENGINE':
            return {
                ...state,
                search: action.payload.search
            }
        case 'SEARCH_DESCRIPTION':
            return {
                ...state,
                description: action.payload.description,
                location: action.payload.location
            }
        case 'SEARCH_LOCATION':
            return {
                ...state,
                lat: action.payload.lat,
                long: action.payload.long
            }

        default:
            return state
    }
}
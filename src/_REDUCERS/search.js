//SEARCH REDUCER
import { mainState } from '../_STORE'

export const searchReducer = (state = mainState.search, action) => {
    switch (action.type) {

        case 'SEARCH_ENGINE':
            return {
                ...state,
                results: action.payload
            }

        default:
            return state
    }
}
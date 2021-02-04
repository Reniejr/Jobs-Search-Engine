export const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_ENGINE':
            return {
                ...state,
                results: action.payload.results,
                chunkResults: action.payload.chunkResults
            }
        case 'GET_FAVS': 
            console.table(action)
            return {
                ...state,
                chunkResults: action.payload
            }
        default:
            return state
    }
}
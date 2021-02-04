export const favReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return {
            ...state,
            favourites : state.favourites.concat(action.payload)
            
            }
        
        case 'REMOVE_FAV':
            return {
            ...state,
            favourites : [...state.favourites.filter(fav => fav !== action.payload)]
            }
        
        default: return state            
    }
}
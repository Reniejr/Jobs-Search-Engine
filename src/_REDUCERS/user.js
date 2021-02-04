export default function (state = {}, action) {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
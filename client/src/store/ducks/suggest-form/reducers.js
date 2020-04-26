import * as types from './types'

export const initialState = {
}

function suggestFormReducer(state = initialState, {type, payload = null}) {
    switch (type) {
        case types.MAKE_SUGGEST:
            return {
                ...state,
            }
        case types.MAKE_SUGGEST_COMPLETED:
            return {
                ...state,
            }
        case types.MAKE_SUGGEST_FAILED:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default suggestFormReducer
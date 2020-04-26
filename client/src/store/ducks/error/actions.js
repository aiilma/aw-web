import * as actionTypes from './types';

export const executeErrorHandler = (payload) => {
    return {
        type: actionTypes.SET_HTTP_ERROR,
        payload
    }
}

export const resetErrorHandler = () => {
    return {
        type: actionTypes.RESET_HTTP_ERROR
    }
}
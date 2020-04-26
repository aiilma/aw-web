import {makeSuggest} from './actions'


const makeRequest = (data) => dispatch => {
    return dispatch(makeSuggest(data))
}


export {
    makeRequest
}
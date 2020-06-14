import {upload} from './actions'

const makeRequest = (data) => async dispatch => {
    const {typeVariant, title, price, uploads, ph} = data;
    const formData = new FormData();

    formData.append('typeVariant', typeVariant);
    formData.append('title', title);
    formData.append('price', price);
    formData.append('image', uploads.image);
    formData.append('sourceProject', uploads.sourceProject);
    formData.append('ph', JSON.stringify(ph));

    return dispatch(upload( formData ))
};


export {
    makeRequest
}
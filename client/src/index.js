import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/store";
import {Provider} from "react-redux";
import App from "./App";


if (process.env.NODE_ENV !== 'production') {
    window.store = store
    window.st = store.getState()
    // console.log(store.getState())
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

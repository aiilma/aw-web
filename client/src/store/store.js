import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from "redux-thunk";
import * as reducers from "./ducks";
import {apiService, createLogger} from "./middlewares";


const rootReducer = combineReducers(reducers);
const isLogger = process.env.NODE_ENV !== 'production'

export default createStore(
    rootReducer,
    applyMiddleware(
        apiService,
        thunkMiddleware,
        createLogger(isLogger),
    ),
);

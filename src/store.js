import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

//Simple Middleware to log the actions and the state of the store after executing such action.
const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());

    return result;
};

//cart estado inicial, empty cart
export default createStore(combineReducers(reducers), applyMiddleware(logger, thunk));
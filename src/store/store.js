import redux from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';


let createStore = redux.createStore;
let applyMiddleware = redux.applyMiddleware;

export const store = createStore(reducers.Reducer, applyMiddleware(thunk));

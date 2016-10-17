import redux from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';

let middleware = applyMiddleware(thunk);
let store = createStore(reducers, middleware);

export default store;

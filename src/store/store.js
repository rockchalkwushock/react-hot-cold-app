import redux from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';

const middleware = applyMiddleware(thunk);

export const store = createStore(reducers.Reducer, middleware);

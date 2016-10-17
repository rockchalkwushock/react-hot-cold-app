import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Game from './src/components/Game';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Provider store={store}>
        <Game />
      </Provider>,
      document.getElementById('app'));
});

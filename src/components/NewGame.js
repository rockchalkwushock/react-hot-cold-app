import React from 'react';
import actions from '../actions/actions';
import {connect} from 'react-redux';

class NewGame extends React.Component {
  onClick() {
    this.props.dispatch(
      actions.newGame()
    );
  }
  render() {
    return (
      <div>
        <button type='button' onClick={this.onClick}>New Game</button>
      </div>
    );
  }
}

let Container = connect()(NewGame);
export default Container;

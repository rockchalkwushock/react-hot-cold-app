import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';
import store from '../store/store';

class Input extends React.Component {
  onClick() {
    let returnNumber = this.props.dispatch(
      actions.guessNumber(this.refs.userGuess.value, this.props.counter)
    );
    if (store.getState().correctAnswer === true) {
      store.dispatch(
        actions.postGuesses(store.getState().counter)
      );
    }
    this.refs.userGuess.value = '';
  }
  render() {
    return (
      <div>
        <form action='#'>
          <input type='text' ref='userGuess' />
          <button type='button' onClick={this.onClick.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }
}

let mapStateToProps = (state, props) => {
  return {
    counter: state.counter,
    correctAnswer: state.correctAnswer,
    fewestGuesses: state.fewestGuesses,
  }
}

let Container = connect(mapStateToProps)(Input);
export default Container;

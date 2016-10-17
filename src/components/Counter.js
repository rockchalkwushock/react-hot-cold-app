import React from 'react';
import actions from '../actions/actions';
import {connect} from 'react-redux';

class Counter extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      actions.fetchGuesses(this.props.fewestGuesses)
    );
  }
  render() {
    return (
      <div>
        <h3>Number of Guesses: {this.props.counter}</h3>
        <h3>Fewest Number of Guesses: {this.props.fewestGuesses}</h3>
      </div>
    );
  }
}

let mapStateToProps = (state, props) => {
  return {
    counter: state.counter,
    fewestGuesses: state.fewestGuesses
  }
}

let Container = connect(mapStateToProps)(Counter);
export default Container;

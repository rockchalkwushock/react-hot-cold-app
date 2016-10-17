import React from 'react';
import {connect} from 'react-redux';

class GuessList extends React.Component {
  render() {
    let guesses = '';
    let guessLists = this.props.guessLists.map((guessList) => {
      return <li key={guessList}>{guessList}</li>
    });
    return (
      <ul>
        {guessLists}
      </ul>
    );
  }
}

let mapStateToProps = (state, props) => {
  return {
    guessLists: state.guesses
  }
}

let Container = connect(mapStateToProps)(GuessList);
export default Container;

import React from 'react';
import {connect} from 'react-redux';
import Counter from './Counter';
import GuessList from './GuessList';
import Input from './Input';
import Message from './Message';
import NewGame from './NewGame';

/*
  Componenets needed to run game:
  1. Input Component
  2. GuessList Component
  3. Message Component
  4. NewGame Component
  5. Counter Component
*/

export default class Game extends React.Component {
  render() {
    return (
      <div>
        <h1>Hot or Cold</h1>
        <Input/>
        <Counter/>
        <Message/>
        <GuessList/>
        <NewGame/>
      </div>
    )
  }
}

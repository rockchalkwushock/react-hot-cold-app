/*
  Required Actions
  1. User can guess a number.
  2. User can start a new game.
*/

// Action #1
let GUESS_NUMBER = 'GUESS_NUMBER';
let guessNumber = (num, counter) => {
  return {
    type: GUESS_NUMBER,
    num, // ES6 convention
    counter, // ES6 convention
  };
};

// Action #2
let NEW_GAME = 'NEW_GAME';
let newGame = (game, num) => {
  return {
    type: NEW_GAME,
    game // ES6 convention
  };
};

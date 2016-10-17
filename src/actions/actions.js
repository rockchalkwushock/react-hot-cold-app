import {polyfill} from 'es6-promise';
import fetch from 'isomorphic-fetch';
/*
  Required Actions
  1. User can guess a number.
  2. User can start a new game.
*/

// Action #1
let GUESS_NUMBER = 'GUESS_NUMBER';
let guessNumber = (number, counter) => {
  return {
    type: GUESS_NUMBER,
    number, // ES6 convention
    counter, // ES6 convention
  };
};

// Action #2
let NEW_GAME = 'NEW_GAME';
let newGame = (game, number) => {
  return {
    type: NEW_GAME,
    game // ES6 convention
  };
};

let FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
let fetchFewestGuessesSuccess = (fewestGuesses) => {
    return {
        type: FETCH_FEWEST_GUESSES_SUCCESS,
        fewestGuesses
    };
};

let FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
let fetchFewestGuessesError = (fewestGuesses, error) => {
    return {
        type: FETCH_FEWEST_GUESSES_ERROR,
        fewestGuesses,
        error
    };
};

let fetchGuesses = (fewestGuesses) => {
    return (dispatch) => {
        let url = 'http://localhost:8080/fewest-guesses';
        return fetch(url).then((response) => {
            if (response.status < 200 || response.status >= 300) {
               let error = new Error(response.statusText);
               error.response = response;
               throw error;
           }
           return response.json();
       })
       .then((data) => {
           let fewestGuesses = data[0].bestScore;
           return dispatch(
               fetchFewestGuessesSuccess(fewestGuesses)
           );
       })
       .catch((error) => {
           return dispatch(
               fetchFewestGuessesError(fewestGuesses, error)
           );
       });
    };
};

let POST_FEWEST_GUESSES_SUCCESS = 'POST_FEWEST_GUESSES_SUCCESS';
let postFewestGuessesSuccess = (currentUserScore) => {
    return {
        type: POST_FEWEST_GUESSES_SUCCESS,
        currentUserScore
    };
};

let POST_FEWEST_GUESSES_ERROR = 'POST_FEWEST_GUESSES_ERROR';
let postFewestGuessesError = (currentUserScore, error) => {
    return {
        type: POST_FEWEST_GUESSES_ERROR,
        currentUserScore,
        error
    };
};
let postGuesses = (currentUserScore) => {
    return (dispatch) => {
        let url = 'http://localhost:8080/fewest-guesses';
        return fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({currentUserScore})
        }).then((response) => {
            if (response.status < 200 || response.status >= 300) {
               let error = new Error(response.statusText);
               error.response = response;
               throw error;
           }
           return response.json({});
       })
       .then((data) => {
           return dispatch(
               postFewestGuessesSuccess(currentUserScore)
           );
       })
       .catch((err) => {
       });
    };
};

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.fetchFewestGuessesSuccess = fetchFewestGuessesSuccess;
exports.FETCH_FEWEST_GUESSES_SUCCESS = FETCH_FEWEST_GUESSES_SUCCESS;
exports.fetchFewestGuessesError = fetchFewestGuessesError;
exports.FETCH_FEWEST_GUESSES_ERROR = FETCH_FEWEST_GUESSES_ERROR;
exports.postFewestGuessesSuccess= postFewestGuessesSuccess;
exports.POST_FEWEST_GUESSES_SUCCESS = POST_FEWEST_GUESSES_SUCCESS;
exports.postFewestGuessesError= postFewestGuessesError;
exports.POST_FEWEST_GUESSES_ERROR = POST_FEWEST_GUESSES_ERROR;
exports.fetchGuesses = fetchGuesses;
exports.postGuesses = postGuesses;

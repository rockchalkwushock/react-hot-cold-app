import actions from '../actions/actions';

let initialState = {
    randomNumber: Math.floor(Math.random() * 100) + 1,
    guesses: [],
    counter: 0,
    message: '',
    userGuess: '',
    fewestGuesses: 0,
    currentUserScore: 0
};

export const Reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actions.GUESS_NUMBER:
            let correct = false;
            let msg;
            let counter = 0;
            let errorMessage;
            action.number = parseInt(action.number);
            if (action.number === state.guessNumber) {
                correct = true;
                msg = 'You Win! Play Again?';
            } else if (state.guessNumber - 5 <= action.number && action.number <= state.guessNumber + 5) {
                correct = false;
                msg = "Very Hot!";
            } else if (state.guessNumber - 15 <= action.number && action.number <= state.guessNumber + 15) {
                correct = false;
                msg = "Warm!";
            } else if (state.guessNumber - 25 <= action.number && action.number <= state.guessNumber + 25) {
                correct = false;
                msg = "Cold!";
            } else {
                msg = "Cold As Planet Hoth!";
            }
            let guessLists = state.guesses.concat(action.number);
            counter = state.counter + 1;
            if (isNaN(action.number)) {
                msg = 'Please enter a number!';
            } else {
                guessLists;
                counter;
            }
            return Object.assign({}, state, {
                guesses: guessLists,
                correctAnswer: correct,
                counter: counter,
                msg: msg
            });

        case actions.NEW_GAME:
            var newGame = Object.assign({}, state, {
                guessNumber: Math.floor(Math.random() * 100) + 1,
                guesses: [],
                counter: 0,
                msg: 'New Game Started!'
            });
            return newGame;

        default:
            return state;

    }
};

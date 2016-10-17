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

let AppReducer = function (state, action) {
    state = state || initialState;
    switch (action.type) {
        case actions.GUESS_NUMBER:
            let correct = false;
            let message;
            let counter = 0;
            let errorMessage;
            action.number = parseInt(action.number);
            for (var i = 0; i < state.guesses.length; i++) {
              if (action.number === state.guesses[i]) {
                message = 'You already picked that number!';
              return Object.assign({}, state, {
                  message
              });
            }
            }


            if (action.number === state.guessNumber) {
                correct = true;
                message = 'You Win! Play Again?';
            } else if (state.guessNumber - 5 <= action.number && action.number <= state.guessNumber + 5) {
                correct = false;
                message = "Very Hot!";
            } else if (state.guessNumber - 15 <= action.number && action.number <= state.guessNumber + 15) {
                correct = false;
                message = "Warm!";
            } else if (state.guessNumber - 25 <= action.number && action.number <= state.guessNumber + 25) {
                correct = false;
                message = "Cold!";
            } else {
                message = "Cold As Planet Hoth!";
            }
            let guessLists = state.guesses.concat(action.number);
            counter = state.counter + 1;
            if (isNaN(action.number)) {
                message = 'Please enter a number!';
            } else {
                guessLists;
                counter;
            }
            return Object.assign({}, state, {
                guesses: guessLists,
                correctAnswer: correct,
                counter,
                message
            });

        case actions.NEW_GAME:
            let newGame = Object.assign({}, state, {
                guessNumber: Math.floor(Math.random() * 100) + 1,
                guesses: [],
                counter: 0,
                message: 'New Game Started!'
            });
            return newGame;

        case actions.FETCH_FEWEST_GUESSES_SUCCESS:
            let fewestGuesses = action.fewestGuesses;
            let fewestUserGuesses = Object.assign({}, state, {fewestGuesses});
            return fewestUserGuesses;

        case actions.POST_FEWEST_GUESSES_SUCCESS:
            counter = state.counter;
            let currentUserScore = counter;
            let newScore = Object.assign({}, state, {currentUserScore});
            return newScore;

        default:
            return state;

    }
};

export default AppReducer;

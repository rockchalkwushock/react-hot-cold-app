import mongoose from 'mongoose';

let GuessesSchema = new mongoose.Schema({
  bestScore: {type: Number, required: true}
});

let Guesses = mongoose.model('Guesses', GuessesSchema);

export default Guesses;

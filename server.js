import express from 'express';
let app = express();

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
app.use(bodyParser.json());
app.use(express.static('build'));
mongoose.connect('mongodb://localhost/hot-cold');

import Guesses from './src/models/guesses';
let bestScore;

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/fewest-guesses', (req, res) => {
    Guesses.find((err, bestScore) => {
        if (err) {
            return res.status(500);
        }
        res.send(bestScore);
    });
});

app.post('/fewest-guesses', (req, res) => {
    Guesses.findOne((err, bestScore) => {
        if(parseInt(bestScore.bestScore) > parseInt(req.body.currentUserScore)) {
            Guesses.update({
                $set: {bestScore: req.body.currentUserScore}
            }, (err, bestScore) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Internal Server Error'
                    });
                }
                res.status(201).json(bestScore);
            });
        } else {
            res.status(200).json(bestScore);
        }
    });
});

app.listen(process.env.PORT || 8080);

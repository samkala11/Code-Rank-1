const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Tweet = require('../../models/Tweet');
const validateTweetInput = require('../../validation/tweets');

router.get('/', (req, res) => {
    // get all tweets 
    Tweet.find()
    // find tweets filtered by between parentheses - if nothing between parentheses it will return everything
    // it returns an array of objects
        .sort({ date: -1 })
        .then(tweets => res.json(tweets))
        .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});

router.get('/user/:user_id', (req, res) => {
    // get all tweets related to this user id
    Tweet.find({ user: req.params.user_id })
        .then(tweets => res.json(tweets))
        .catch(err =>
            res.status(404).json({ notweetsfound: 'No tweets found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    // find a tweet item
    Tweet.findById(req.params.id)
        .then(tweet => res.json(tweet))
        .catch(err =>
            res.status(404).json({ notweetfound: 'No tweet found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // only logged in users can create a tweet
        const { errors, isValid } = validateTweetInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newTweet = new Tweet({
            text: req.body.text,
            user: req.user.id
        });

        newTweet.save().then(tweet => res.json(tweet));
    }
);

module.exports = router;
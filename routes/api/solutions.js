const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Solution = require('./../../models/Solution');

// fetch a specific solution
router.get('/problem/:problem_id', (req, res) => {
    Solution.find({problem: req.params.problem_id})
        .then(solution=> res.json(solution))
        .catch(err =>
            res.status(404).json({ solution: 'There is no solution for this problem ' }))
})

router.post('/solutions',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newSolution = new Solution({
            author: req.author.id,
            question: req.question.id,
            solution: req.body.solution,
            language: req.body.language 
            // If it is a foreign key, I put it as it is shown in the model
            // If not, I put everything else under the body key
        });

        newSolution.save().then(solution => res.json(solution));
    }
);

module.exports = router;
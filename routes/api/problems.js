const express = require("express");
const router = express.Router();
const RubyProblem = require('./../../models/RubyProblem');
const JSProblem = require('./../../models/JSProblem');

router.get('/:id', (req, res) => {
    RubyProblem.findById(req.params.id)
        .then(problem => res.json(problem))
        .catch(err =>
            res.status(404).json({ noproblemsfound: 'There are no problems with that ID' }))
})

router.get('/:id', (req, res) => {
    JSProblem.findById(req.params.id)
        .then(problem => res.json(problem))
        .catch(err =>
            res.status(404).json({ noproblemsfound: 'There are no problems with that ID' }))
})



module.exports = router;

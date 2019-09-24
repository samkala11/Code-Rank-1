const express = require("express");
const router = express.Router();
const Problem = require('./../../models/Problem');

// fetch a specific problem
router.get('/:id', (req, res) => {
    Problem.findById(req.params.id)
    .then(problem => res.json(problem))
    .catch(err => 
        res.status(404).json({noproblemsfound: 'There are no problems with that ID'}))
})


module.exports = router;

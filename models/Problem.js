const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProblemSchema = new Schema({
    // _author: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users',
    //     required: true
    // }, /!\ Should not be needed
    date: {
        type: Date,
        default: Date.now
    },
    
    language: {
        type: String,
        required: true
    },

    orderNumber: {
        type: Integer,
        required: true // Gotta be unique
    },//Number of the question, insted of havin an ID of random characters we will have a whole integer

    level: {
        type: String,
        // Easy Medium Hard
        required: true
    },

    description: {
        type: String,
        required: true
    },

    testCode: {
        type: String,
        required: true
    },

    initialCode: {
        type: String
        // What the user sees in the Editor when the problem is given
    },

    hints: {
        type: String
        // Not necessary for now
    },

    inputOutput: {
        type: String,
        required: true
    },
    //  /!\ Shouldn't it be an array ????

    originalSolution: {
        type: String,
        required: true
    },

    upvotes: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    // Not necessary for now, the upvotes are better for solutions
    tags: [{ type: String }]
    // Categories the problem belongs to
})

module.exports = Problem = mongoose.model('problems', ProblemSchema);
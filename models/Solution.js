const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SolutionSchema = new Schema({
    _author: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    _question: {
        type: Schema.Types.ObjectId,
        ref: 'problems',
        required: true
    },
    solution: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    }
    ,
    upvotes: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    comments: [
        {
            body: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            },
            _author: {
                type: Schema.Types.ObjectId,
                ref: 'users',
                required: true
            }
        }
    ]
    // Do not think about it for now
})

module.exports = Solution = mongoose.model('solutions', SolutionSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContestSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },

    _author: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    // This is the admin who created the contest
    tags: [{ type: String }],
    // Array of categories the problems in the contest belong to (sum of categories of each problem in the contest? I am still not sure if it is needed )
    questions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'problems',
            required: true
        }
    ],

    duration: {
        type: Number,
        required: true
    },

    startDate: {
        type: Date,
        required: true
    },

    language: {
        type: String,
        required: true
    },
    
    results: [
        {
            _userId: {
                type: Schema.Types.ObjectId,
                ref: 'users',
                required: true
            },
            points: {
                type: Number,
                required: true
            },
            solutions: [
                // {questinId + Body}
                { type: Schema.Types.ObjectId, ref: 'solutions' }
            ],
            duration: {
                type: Integer,
                required: true
            }
        }
    ]
})

module.exports = Contest = mongoose.model('contests', ContestSchema);
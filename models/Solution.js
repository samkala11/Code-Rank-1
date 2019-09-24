const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
})


const SolutionSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    question: {
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
    comments: [CommentSchema]
    // Do not think about it for now
})

module.exports =  SolutionSchema;
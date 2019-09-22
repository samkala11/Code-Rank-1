const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        // users object id
        // ref users may mean the users object
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Tweet = mongoose.model('tweet', TweetSchema);
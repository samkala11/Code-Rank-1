const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    enrolledLanguages: [
        {
        type: String, //would be either an array of JS & Ruby or an Array of one language
        required: false
        }
    ],
    currentLanguage:{
        type: String, // Will be an array of one element
        required: false
    },

    languageLevels:[
        {
        level:{
            type: String,
            default: 'Easy' //Medium Hard
        },
        levelProgress:{
            type: Number,// /!\Should it be a whole number or a percentage 
            default: 0
        }, 

        language: {
            type: String,
            required: true
        }///!\ DO WE NEED THE LEVEL LANGUAGE HERE?
        // What are we going to show in the user's level page if, for example, he is in Level 1 for JS and Level 3 in Ruby ? 
    }
    ],

    points:{
        type: Number,
        default: 0,
        required: true
    },

    online:{
        type: Boolean,
        required: false
    },
    admin:{
        type: Boolean,
        default: false
    } //By default, I am not an admin
})




const User = mongoose.model('users', UserSchema)
module.exports = User 


// OR

// module.exports = User = mongoose.model('users', UserSchema);
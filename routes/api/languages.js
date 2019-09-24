const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const passport = require('passport');

router.post('/:languageId', passport.authenticate('jwt', {session: false}, (req, res) => {
    let userId = req.user._id;
    let user = User.findById(userId);
    // user
    db.users.update(
       { _id: userId},
       {$set:
    {
        currentLanguage: languageId,
        languageLevels: $push(
             {
                language: req.params.languageId,
                levelProgress: 0,
                level: 1
            }
        )
    }
}
    )
}))



module.exports = router;
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {};

userController.newUser = (req, res, next) => {
    //taking the username and password that were passed into the input fields
    const {username, password} = req.body;

    //if username or password aren't entered completely, give error
    if(!username || !password) {
        return next('Dude, just enter your fricken details properly');
    } else {
        bcrypt.hash(password, 10)
        .then(hash => {
            User.create({username, password: hash}, (err, success) => {
                if(err){
                    return next(err);
                } else {
                    //grabbing the proper property and assigning it to proper property
                    res.locals.id = success._id.id;
                    return next();
                }
            })
        })
        .catch(err => next(err))
    }
};

userController.checkUser = (req, res, next) => {
    
}
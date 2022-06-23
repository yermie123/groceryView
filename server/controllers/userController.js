const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const { Resolver } = require('webpack');

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

userController.checkUser = async (req, res, next) => {
    //same here
    const { username, password } = req.body;
    //same here as well
    if(!username || !password){
        return next({
            error: 'Username or Password is Incorrect'
        });
    }
    const temp = await User.findOne({username});

    if(!temp) {
        //if the username wasn't found, redirect path is filled, which is checked in server.js file
        res.locals.redirectPath = '/signup';
        return next();
    }
    bcrypt.compare(password, temp.password)
        .then(res => {
            if(res){
                res.locals.redirectPath = '/secret';
                res.locals.id = temp._id.id;
            } else {
                res.locals.redirectPath = '/signup';
            }
            return next();
        })
        .catch(err => {return next(err)});

}


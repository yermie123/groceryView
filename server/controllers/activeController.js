const Session = require('../models/sessionModel')
const activeController = {};

//check if the person is logged in based on the cookie info
activeController.cookieCheck = (req, res, next) => {
    //checks if cookie is not present in cookies
    if(!req.cookies.imhonestlydonewiththiscrap){
        res.locals.redirect = '/signup';
    }
    //otherwise, the user is good to go to the secret page
    return next();
};

activeController.activateSession = (req, res, next) => {
    Session.create({'cookie': res.locals.id}, (err, success) => {
        if(err){
            return next('Ok, there seems to be some kind of issue, but I am to tired to care right now');
        }
        console.log('created');
        return next();
    })
};

module.exports = activeController;
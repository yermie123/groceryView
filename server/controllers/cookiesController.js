const cookiesController = {};

cookiesController.setSessionCookie = (req, res, next) => {
    console.log('hicookie');
    res.cookie('imhonestlydonewiththiscrap', res.locals.id, {httpOnly: true});
    return next();
}

module.exports = cookiesController;
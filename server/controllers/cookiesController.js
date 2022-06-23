const cookiesController = {};

cookiesController.setSessionCookie = (req, res, next) => {
    res.cookie('ssid', res.locals.id, {httpOnly: true});
    return next();
}

module.exports = cookiesController;
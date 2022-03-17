const checkAuth = (req, res, next) => {
    // change this to req.session later
    if(!req.body.loggedIn) {
        res.redirect("/login")
    } else {
        next();
    }

}

module.exports = checkAuth;
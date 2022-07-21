
const middleware = {};
var passport = require('passport');


 middleware.isLoggedIn=(req, res,next)=> {

    if (req.isAuthenticated())

	//console.log(req);
            
        return next();
    
    res.redirect('/');

}

middleware.login=()=> {

    passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	})

}

middleware.signup=()=> {

    passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	})

}

module.exports = middleware;
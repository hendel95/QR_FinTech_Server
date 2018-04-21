var local_login = require('./passport/local_login');
var facebook_login = require('./passport/facebook_login');
var naver_login = require('./passport/naver_login');

module.exports = function (app, passport)
{
    passport.serializeUser(function(user, done) {
        console.log('serializeUser 호출');
        console.log(user);
        done(null,user);
    });

    passport.deserializeUser(function(user, done) {
        console.log('deserializeUser 호출');
        console.log(user);
        done(null,user);
    });

    passport.use('local-login',local_login);
    passport.use('facebook-login',facebook_login);
    passport.use('naver-login',naver_login);
};







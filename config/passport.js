var LocalStrategy = require('passport-local').Strategy

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
       console.log('a');
    });
    passport.deserializeUser(function(id, done) {
        console.log('a');
    });

    //프로그램 작성
};
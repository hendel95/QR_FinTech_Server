var express = require('express');
var router = express.Router();

var DBManager = require('../database/DBManager.js');
var connection = DBManager.getConnection();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', function(req, res) {
    res.render('process/login.ejs');
});

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

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true //인증을 수행하는 인증 함수로 HTTP request를 그대로  전달할지 여부를 결정한다
}, function (req, email, password, done) {
    if(email === 'a@a' && password === 'a'){
        return done(null, {
            'user_id': email,
        });
    }else{
        return done(false, null)
    }
}));

//passport 를 이용한 로그인 구현
var passport = require('passport');
router.post('/',passport.authenticate('local',{successRedirect: '/user', failureRedirect: '/'}));

module.exports = router;

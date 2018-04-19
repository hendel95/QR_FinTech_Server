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

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true //인증을 수행하는 인증 함수로 HTTP request를 그대로  전달할지 여부를 결정한다
}, function (req, username, password, done) {
    if(username === 'user001' && password === 'password'){
        return done(null, {
            'user_id': username,
        });
    }else{
        return done(false, null)
    }
}));

//passport 를 이용한 로그인 구현
var passport = require('passport');
router.post('/',passport.authenticate('local',{successRedirect: '/user', failureRedirect: '/'}));

module.exports = router;

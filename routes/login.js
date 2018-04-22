var express = require('express');
var router = express.Router();

var DBManager = require('../database/DBManager.js');
var connection = DBManager.getConnection();


/* GET home page. */
router.get('/', function(req, res) {
    res.render('process/login.ejs', {message : ''});
});

router.get('/fail', function(req, res) {
    res.render('process/login.ejs', {message : '아이디 혹은 비밀번호가 틀립니다. 다시 시도해 주십시오'});
});

//passport 를 이용한 로그인 구현
var passport = require('passport');
router.post('/',passport.authenticate('local-login',{successRedirect: '/user', failureRedirect: '/login/fail'}));

module.exports = router;

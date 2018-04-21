var express = require('express');
var router = express.Router();

var DBManager = require('../database/DBManager.js');
var connection = DBManager.getConnection();


/* GET home page. */
router.get('/', function(req, res) {
    res.render('process/login.ejs');
});

//passport 를 이용한 로그인 구현
var passport = require('passport');
router.post('/',passport.authenticate('local-login',{successRedirect: '/user', failureRedirect: '/'}));

module.exports = router;

var express = require('express');
var router = express.Router();

var userQuery = require('../database/userQuerys');


/* GET home page. */
router.get('/user', function(req, res) {
    userQuery.selectUserInMobile(req,res);
});

router.get('/fail', function(req, res) {
    res.json({result : 0});
});

module.exports = router;

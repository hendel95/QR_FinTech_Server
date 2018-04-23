var express = require('express');
var router = express.Router();

var userQuery = require('../database/userQuerys');


/* GET home page. */
router.get('/', function(req, res) {
    userQuery.selectUser(req,res);
    //res.render('dashboard/user', {req:req} );
});


module.exports = router;

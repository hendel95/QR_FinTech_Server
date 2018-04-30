var express = require('express');
var router = express.Router();

var Query = require('../database/productQuerys');


/* GET home page. */
router.get('/', function(req, res) {
    res.render('dashboard/dashboard', {req:req} );
});

module.exports = router;

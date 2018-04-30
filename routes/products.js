var express = require('express');
var router = express.Router();

var Query = require('../database/productQuerys');


/* GET home page. */
router.get('/', function(req, res) {
    Query.selectProducts(req,res);
    //res.render('dashboard/user', {req:req} );
});

module.exports = router;

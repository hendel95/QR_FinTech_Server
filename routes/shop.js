var express = require('express');
var router = express.Router();

var shopQuery = require('../database/shopQuerys');


/* GET home page. */
router.get('/', function(req, res) {
    shopQuery.selectShop(req,res);
    //res.render('dashboard/user', {req:req} );
});

module.exports = router;

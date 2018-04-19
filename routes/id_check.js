var DBManager = require('../database/DBManager.js');
var connection = DBManager.getConnection();
var express = require('express');
var router = express.Router();

router.post('/',function(req, res){

    var id = req.body.id;

    var sql = 'SELECT * FROM user WHERE id=?';

    connection.query(sql, [id], function(err,check){
        if(check[0]){
            res.send({result:true, check:'중복된 아이디 입니다.'});
        }else{
            res.send({result:true, check:'사용가능한 아이디 입니다.'});
        }
    });
});

module.exports = router;

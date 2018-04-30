var DBManager = require('./DBManager.js');
var connection = DBManager.getConnection();
var sha256 = require('sha256');

exports.insertUser = function(req,res) {
    var insertsql = 'insert into user (`id`,`pw`, `name`, `phone_number`, `img`, `nickname`, `about`)  values (?,?,?,?,?,?,?)';
    connection.query(insertsql, [req.body.email, sha256( req.body.password ), req.body.name, req.body.phone, req.file.filename, req.body.nickname, req.body.about], function (err, rows) {
        if (!err) {
            res.redirect('/');
        }
        else {
            res.render('process/sign_up.ejs', {message : '아이디 중복 여부를 확인해 주십시오 : ' + err});
        }

    });
}

exports.selectUser = function (req,res) {
    var query = 'SELECT * FROM user WHERE id = ?';
    connection.query(query, [req.user.email], function (err, rows) {
        if (!err) {
            res.render('dashboard/user',{req:req, rows:rows});
        }
        else {

        }

    });
}

exports.selectUserInMobile = function (req,res) {
    var query = 'SELECT * FROM user WHERE id = ?';
    connection.query(query, [req.user.email], function (err, rows) {
        if (!err) {
            res.json(
                {
                    result : 1,
                    id : rows[0].id,
                    pw : rows[0].pw,
                    name : rows[0].name,
                    type : rows[0].type,
                    phone_number : rows[0].phone_number,
                    img : rows[0].img,
                    nickname : rows[0].nickname,
                    about : rows[0].about,
                    balance : rows[0].balance
                }
            );
        }
        else {

        }

    });
}
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
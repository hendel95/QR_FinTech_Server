var DBManager = require('./DBManager.js');
var connection = DBManager.getConnection();

exports.insertUser = function(req,res) {
    var insertsql = 'insert into user (`id`,`pw`, `name`, `phone_number`)  values (?,?,?,?)';

    connection.query(insertsql, [req.body.email, req.body.password, req.body.name, req.body.phone], function (err, rows) {
        if (!err) {
            res.redirect('/');
        }
        else {

        }

    });
}
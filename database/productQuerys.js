var DBManager = require('./DBManager.js');
var connection = DBManager.getConnection();
var sha256 = require('sha256');


exports.selectProducts = function (req,res) {
    var query = 'SELECT * FROM product WHERE owner_id = ?';
    connection.query(query, [req.user.email], function (err, rows) {
        if (!err) {
            res.render('dashboard/products',{req:req, rows:rows});
        }
        else {

        }

    });
}

exports.insertProduct = function (req,res) {
    var query = 'INSERT INTO product (`owner_id`, `name`, `price`, `init_date`) VALUES (?, ?, ?, ?);';
    connection.query(query, [req.user.email,req.body.name,req.body.price,'1999-01-01'], function (err, rows) {
        if (!err) {
            res.redirect('/product');
        }
        else {

        }

    });
}

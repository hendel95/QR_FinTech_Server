var DBManager = require('./DBManager.js');
var connection = DBManager.getConnection();
var sha256 = require('sha256');

exports.selectShop = function (req,res) {
    var query = 'SELECT * FROM shop WHERE userId = ?';
    connection.query(query, [req.user.email], function (err, rows) {
        if (!err) {
            res.render('dashboard/shop',{req:req, rows:rows});
        }
        else {

        }

    });
}
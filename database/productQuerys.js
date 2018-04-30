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

var DBManager = require('./DBManager.js');
var connection = DBManager.getConnection();

var logManager = require('../logger/logManager');
var logger = logManager.getLogger();

exports.insertCustomersByCard = function(req,res) {
    var insertsql = 'insert into customer (`type`,`cardNum`, `phone`, `balance`, `adminID`)  values (?,?,?,?,?)';

    connection.query(insertsql, [1, req.body.cardNum, req.body.phone, req.body.cost, req.body.adminID], function (err, rows) {
        if (!err) {
            // console.log('Charge Success');
            logger.info(req.connection.remoteAddress+" customer 추가 [카드] - " + insertsql + " "  + [req.body.cardNum, req.body.ICSN, req.body.phone, req.body.cost, req.body.adminID]);
            var sql = 'select * from customer where cardNum = ? AND adminID=?';
            connection.query(sql, [req.body.cardNum, req.body.adminID], function (err, rows) {
                if (!err) {
                    logger.info(req.connection.remoteAddress+" customer [카드] 잔액 조회 - " + sql + " "  + [req.body.cardNum, req.body.adminID]);
                    res.json({
                        resultCode: 1,
                        cardNum: req.body.cardNum,
                        cost: req.body.cost,
                        balance: req.body.cost
                    });
                }
                else {
                    //console.log('Error');
                }
            });
        }
        else {
            //console.log('Error ', err);
            res.json({
                resultCode: 0,
                cardNum: req.body.cardNum,
                cost: req.body.cost,
                balance: 0,
                failCode: 1
            });
        }

    });
}
var mysql = require('mysql')
var dbconfig = require('../config/connection.js');
var connection = mysql.createConnection(dbconfig);

exports.getConnection = function()
{
    console.log('connection');
    return connection;
}
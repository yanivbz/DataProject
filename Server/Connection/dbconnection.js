//Creat SQL Server Connection
var sql = require('mssql');

var connect = function(){
    var conn = new sql.ConnectionPool({
        user: 'belonguser',
        password: '1q2w3e4r',
        server: 'localhost',
        database: 'BelongDB',
        options: {
            instanceName: 'sqlexpress'
        }
    });
    return conn;
}

module.exports = connect;
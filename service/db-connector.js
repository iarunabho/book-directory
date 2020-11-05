var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sqlsql',
  port: 3306
});

const createTable = () => {
    connection.connect(function(err) {
       
        console.log("Connected!");
        var sqlDb = "CREATE DATABASE book";
        connection.query(sqlDb, function (err, result) {
        
            console.log("Database created");
          });
        var sql = "CREATE TABLE IF NOT EXISTS bookdets (name VARCHAR(255), count Integer)";
        connection.query(sql, function (err, result) {
        
          console.log("Table created");
        });
      });
}
const createConnection = () => {
    connection.connect();
    return connection;
}

const deleteConnection = () => {
    connection.end();
}

module.exports = {createConnection, deleteConnection, createTable};
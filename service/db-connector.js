var mysql = require('mysql')

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  insecureAuth : true,
  database: 'book'
});

const createTable = () => {
    connection.connect(function(err) {
       
        console.log("Connected!");
        var sql = "CREATE TABLE IF NOT EXISTS bookdets(name VARCHAR(255), count Integer)";
        connection.query(sql, function (err, result) {
        
          console.log("Table created");
        });
      });
}
const createConnection = () => {
    return connection;
}

const deleteConnection = () => {
    connection.end();
}

module.exports = {createConnection, deleteConnection, createTable};
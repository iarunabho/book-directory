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
        if (err) throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE IF NOT EXISTS bookdets(id Integer NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, count Integer NOT NULL, PRIMARY KEY (id))";
        connection.query(sql, function (err, result) {
          if (err) throw err;
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
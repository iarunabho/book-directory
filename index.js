const mysql = require('./service/db-connector');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
console.log(mysql);
const port = 3000;

mysql.createTable();

app.get('/', (req, res) => {
    const conn = mysql.createConnection();
    var sql = "SELECT * FROM bookdets";
    conn.query(sql, function (err, result) {
      console.log(result);
      res.send(result);  
    });    
})

app.use(bodyParser.json());
app.post('/', function (req, res) {
    const conn = mysql.createConnection();
    console.log(req.body)
    var sql = "INSERT INTO bookdets (name, count) VALUES ('" + req.body.bookname + "', " + req.body.count + ")";
    conn.query(sql, function (err, result) {
      console.log(result);
    });
    res.send('Got a POST request');
})
app.put('/user/:username', function (req, res) {
    // res.send('Got a PUT request at /user')
    res.send('username is ' + req.params.username);
})
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
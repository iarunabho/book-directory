const mysql = require('./service/db-connector');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3010;

mysql.createTable();

app.get('/', (req, res) => {
    const conn = mysql.createConnection();
    var sql = "SELECT * FROM bookdets";
    conn.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);  
    });    
})
//Added body parser to parse json
app.use(bodyParser.json());
app.post('/', function (req, res) {
    const conn = mysql.createConnection();
    var sql = "INSERT INTO bookdets (name, count) VALUES ('" + req.body.bookname + "', " + req.body.count + ")";
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result)
    });
    res.send("Record Added Successfully");
})

//Added body parser to parse json
app.use(bodyParser.json());
app.put('/update/:id', function (req, res) {
    const conn = mysql.createConnection();
    var sql = "UPDATE bookdets SET name = '" + req.body.bookname + "', count = " + req.body.count + " WHERE id = " + req.params.id;  
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result)
    });
    res.send("Record Updated Successfully");
})

app.delete('/delete/:id', function (req, res) {
    const conn = mysql.createConnection();
    var sql = "DELETE FROM bookdets WHERE id = " + req.params.id;  
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result)
    });
    res.send("Record Deleted Successfully");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
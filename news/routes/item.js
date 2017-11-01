var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require('mysql');
var connection  = mysql.createPool({
	host 			: 'localhost',
	user 			: 'root',
	password  : '',
	database  : 'xin',
})

/* GET home page. */
router.get('/list', function(req, res, next) {
    connection.query('SELECT * FROM gj',function(err, rows, fields) {
    res.header('Access-Control-Allow-Origin',"*")
    res.send(rows);
  })
});

router.post('/detail', function(req, res, next) {
	var abc = req.body.id;
    connection.query(`SELECT * FROM gj WHERE id=${abc}`,function(err, rows, fields){
    res.header('Access-Control-Allow-Origin',"*")
    res.send(rows);
    console.log(rows);
  })
});

module.exports = router;

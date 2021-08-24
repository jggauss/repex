/***********CONEXÃO COM BANCO DE DADOS */

const mysql = require("mysql2");

var connection = mysql.createConnection({
  host     : Config.host,
  user     : Config.username,
  password : Config.password,
  database : Config.database
});

connection.connect(function (err) {
    if(err) {
        console.error('error connecting: ' + err.stak);
        return;
    } 
    console.log('connected id '+connection.threadId);
});

module.exports = connection
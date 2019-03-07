const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password : 'secret',
  database: 'sdc_reviews',
});

connection.connect();

module.exports = connection;

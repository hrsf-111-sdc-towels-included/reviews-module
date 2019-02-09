const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getReviews = function(serverCallback) {
    let query = 'SELECT * FROM Reviews';
    let sqlCb = (err, dbData) => {
      if (err) {
        throw err;
        return
      } else {
        console.log('dbdata', dbData)
        serverCallback(null, dbData)
      }
    }
    connection.query(query, sqlCb)
  }



module.exports = {
    getReviews
};
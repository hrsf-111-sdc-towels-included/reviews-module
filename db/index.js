const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getReviews = (serverCallback) => {
  const query = 'SELECT * FROM Reviews';
  const sqlCb = (err, dbData) => {
    if (err) {
      throw err;
    } else {
      console.log('dbdata', dbData);
      serverCallback(null, dbData);
    }
  };
  connection.query(query, sqlCb);
};
module.exports = {
  getReviews,
};

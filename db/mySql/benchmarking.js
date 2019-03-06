const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password : 'secret',
  database: 'sdc_reviews',
});

connection.connect();

const query = 'SELECT * FROM sdc_reviews, sdc_users WHERE home_id=1 AND sdc_reviews.user_id = sdc_users.id ORDER BY sdc_reviews.created_at';

connection.query(query, (error, results, fields) => {
  if (error) throw error;
  console.log('Query Returned:', results);
});

connection.end();

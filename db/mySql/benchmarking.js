const async = require('async');

const mysqlClient = require('./index.js');

const asyncFunctions = [];

for (let count = 1; count <= 1000000; count += 1) ((count) => {
  const query = `SELECT * FROM sdc_reviews, sdc_users WHERE home_id=${count} AND sdc_reviews.user_id = sdc_users.id ORDER BY sdc_reviews.created_at`;
  asyncFunctions.push((asyncCB) => {
    mysqlClient.query(query, (error) => {
      asyncCB(error);
    });
  });
})(count);

const startTimer = new Date();

async.parallel(asyncFunctions, (err) => {
  if (err) throw new Error(err);
  const endTimer = new Date()
  console.log(`Queries Complete!!! Took ${endTimer - startTimer}ms`);
  mysqlClient.end();
});

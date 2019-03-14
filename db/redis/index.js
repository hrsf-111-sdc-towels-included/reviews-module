const redis = require('redis');

const redisConnection = redis.createClient();

redisConnection.on("error", function (err) {
  console.log("Error " + err);
});

module.exports = redisConnection;
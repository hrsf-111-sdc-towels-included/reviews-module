const riakConnection = require('./riak/index.js');
const redisConnection = require('./redis/index.js');

// Read
module.exports.getReviews = (req, res) => {
  const { homeID } = req.params;
  redisConnection.get(homeID, (err, reviews) => {
    if (err) {
      res.status(500).end();
      return new Error(err);
    }
    if (reviews) {
      const parsedReviews = JSON.parse(reviews);
      return res.status(200)
        .send(parsedReviews)
        .end()
    } else {
      const options = {
        bucket: 'sdc_reviews',
        key: homeID,
        convertToJs: true,
      }
      riakConnection.fetchValue(options, (err, riakRes) => {
        if (err) return new Error(err);
        if (riakRes.isNotFound) return res.status(404).end();
        const reviews = riakRes.values[0].value
        res.status(200)
          .send(reviews)
          .end();
        redisConnection.set(homeID, JSON.stringify(reviews), (err) => {
          if (err) return new Error(err);
        });
      });
    }
  });
}

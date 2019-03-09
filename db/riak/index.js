const Riak = require('basho-riak-client');

const riakNodes = ['localhost:8087'];

const createClient = (cb) => {
  return new Riak.Client(riakNodes, cb);
};
const connection = createClient((err) => {
  if (err) throw new Error(err);
  console.log(`Connected to Riak at: ${riakNodes.toString()}`);
});

// Create
connection.postReview = (req, res) => {
  const { homeID } = req.params;
  const reviewToPost = req.body;
  const options = { bucket: 'sdc_reviews', key: homeID };

  connection.fetchValue(options, (err, riakRes) => {
    if (err) throw new Error(err);
    if (riakRes.isNotFound) {
      const riakObj = new Riak.Commands.KV.RiakObject();
      riakObj.setContentType('application/json');
      riakObj.setValue([reviewToPost]);
      options.value = riakObj;
    } else {
      reviewsToUpdate = JSON.parse(riakRes.values[0].value);
      reviewsToUpdate.push(reviewToPost);
      options.value = reviewsToUpdate;
    }
    connection.storeValue(options, (err, riakRes) => {
      if (err) throw new Error(err);
      res.status(201)
      .send(JSON.stringify(riakRes))
      .end()
    });
  });
}

// Read
connection.getReviews = (req, res) => {
  const { homeID } = req.params;
  const options = {
    bucket: 'sdc_reviews',
    key: homeID,
    convertToJs: true,
  }
  connection.fetchValue(options, (err, riakRes) => {
    if (err) return new Error(err);
    if (riakRes.isNotFound) res.status(404).end();
    const reviews = riakRes.values[0].value
    res.status(200)
      .send(reviews)
      .end();
  });
}

// Update
connection.updateReview = (req, res) => {
  const { homeID } = req.params;
  const updatedReview = req.body;
  const options = { bucket: 'sdc_reviews', key: homeID };
  connection.fetchValue(options, (err, riakRes) => {
    if (err) throw new Error(err);
    if (riakRes.isNotFound) return res.status(404).end();
    const riakObj = riakRes.values[0];
    const reviewsList = JSON.parse(riakObj.value.toString());
    const reviewToUpdate = reviewsList.find((review) => {
      return review.reviewID === updatedReview.reviewID;
    });
    for (let key in updatedReview) {
      reviewToUpdate[key] = updatedReview[key];
    }
    riakObj.setValue(reviewsList);
    options.value = riakObj;
    connection.storeValue(options, (err) => {
      if (err) {
        res.status(400).end();
        throw new Error(err);
      }
      res.status(201).end();
    });
  });
}

connection.deleteReview = (req, res) => {
  
}

//   // Delete
//   .delete((req, res) => {
//     const { itemID } = req.params;
//     const reviewToDelete = req.body;
//     console.log(`DELETE req received -- item id is ${itemID}, review to delete is ${JSON.stringify(reviewToDelete)}`);
//     const handleDBResponse = (err) => {
//       if (err) res.status(400).end();
//       res.status(200)
//         .end();
//     };
//   });

module.exports = connection;

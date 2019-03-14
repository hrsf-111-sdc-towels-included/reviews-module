const Riak = require('basho-riak-client');

const riakNodes = ['18.218.97.177:8087', '18.224.70.49:8087', '18.191.238.41:8087'];

const createClient = (cb) => {
  return new Riak.Client(riakNodes, cb);
};
const riakConnection = createClient((err) => {
  if (err) throw new Error(err);
  console.log(`Connected to Riak at: ${riakNodes.toString()}`);
});

// Create
riakConnection.postReview = (req, res) => {
  const { homeID } = req.params;
  const reviewToPost = req.body;
  const options = { bucket: 'sdc_reviews', key: homeID };

  riakConnection.fetchValue(options, (err, riakRes) => {
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
    riakConnection.storeValue(options, (err, riakRes) => {
      if (err) throw new Error(err);
      res.status(201)
      .send(JSON.stringify(riakRes))
      .end()
    });
  });
}

// Read
riakConnection.getReviews = (req, res) => {
  const { homeID } = req.params;
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
  });
}

// Update
riakConnection.updateReview = (req, res) => {
  const { homeID } = req.params;
  const updatedReview = req.body;
  const options = { bucket: 'sdc_reviews', key: homeID };
  riakConnection.fetchValue(options, (err, riakRes) => {
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
    riakConnection.storeValue(options, (err) => {
      if (err) {
        res.status(400).end();
        throw new Error(err);
      }
      res.status(201).end();
    });
  });
}

// Delete
riakConnection.deleteReview = (req, res) => {
  const { homeID } = req.params;
  const reviewToDelete = req.body.reviewID;
  const options = { bucket: 'sdc_reviews', key: homeID };
  riakConnection.fetchValue(options, (err, riakRes) => {
    if (err) throw new Error(err);
    if (riakRes.isNotFound) return res.status(404).end();
    const riakObj = riakRes.values[0];
    const reviewsList = JSON.parse(riakObj.value.toString());
    const idxOfReviewToDelete = reviewsList.findIndex((review) => {
      return review.reviewID === reviewToDelete;
    });
    if(idxOfReviewToDelete < 0) return res.status(404).end();
    reviewsList.splice(idxOfReviewToDelete, 1);
    riakObj.setValue(reviewsList);
    options.value = riakObj;
    riakConnection.storeValue(options, (err) => {
      if (err) {
        res.status(400).end();
        throw new Error(err);
      }
      res.status(204).end();
    });
  });
}

module.exports = riakConnection;

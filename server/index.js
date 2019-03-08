const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const riakConnection = require('../db/riak/index.js');

const app = express();
const Port = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, '/../client/dist')));

//
// ─── CRUD API ───────────────────────────────────────────────────────────────────
//

app.route('/reviews/:homeID')

  // Create
  .post(riakConnection.postReview)

  // Read
  .get(riakConnection.getReviews)

  // Update
  .put((req, res) => {
    const { itemID } = req.params;
    const reviewToUpdate = req.body;
    console.log(`PUT req received -- item id is ${itemID}, review to update is ${JSON.stringify(reviewToUpdate)}`);
    const handleDBResponse = (err, data) => {
      if (err) res.status(400).end();
      res.status(200)
        .send(data)
        .end();
    };
  })

  // Delete
  .delete((req, res) => {
    const { itemID } = req.params;
    const reviewToDelete = req.body;
    console.log(`DELETE req received -- item id is ${itemID}, review to delete is ${JSON.stringify(reviewToDelete)}`);
    const handleDBResponse = (err) => {
      if (err) res.status(400).end();
      res.status(200)
        .end();
    };
  });


// ────────────────────────────────────────────────────────────────────────────────


app.listen(Port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${Port}`);
});

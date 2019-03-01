const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index.js');
const riakConnection = require('../db/sdc/index.js');

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

// app.get('/api/reviews/:homeId', (req, res) => {
//   db.getReviews(req.params.homeId, (err, reviews) => {
//     if (err) {
//       console.log("We have a server problem", err);
//     } else {
//       res.send(reviews);
//       res.end();
//     }
//   });
// });

// app.get('/api/author/:homeId', (req, res) => {
//   db.getAuthors((err, authors) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(authors);
//       res.end();
//     }
//   });
// });

//
// ─── CRUD API ───────────────────────────────────────────────────────────────────
//

app.route('/reviews/:itemID')

  // Create
  .post((req, res) => {
    const { itemID } = req.params;
    const reviewToPost = req.body;
    console.log(`POST req received -- item id is ${itemID}, review to post is ${JSON.stringify(reviewToPost)}`);
    const handleDBResponse = (err, data) => {
      if (err) res.status(400).end();
      res.status(201)
        .send(data)
        .end();
    };
    riakConnection.storeValue();
    // send itemID, reviewToPost and handleDBResponse to the database
  })

  // Read
  .get((req, res) => {
    const { itemID } = req.params;
    console.log(`GET req received -- item id is ${itemID}`);
    const handleDBResponse = (err, data) => {
      if (err) res.status(404).end();
      res.status(200)
        .send(data)
        .end();
    };
    // send itemID, and handleDBResponse to the database
  })

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

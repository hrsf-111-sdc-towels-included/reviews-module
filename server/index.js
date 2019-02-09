const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index.js');

const app = express();
const Port = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/reviews', (req, res) => {
  db.getReviews((err, reviews) => {
    if (err) {
      console.log(err);
    } else {
      console.log(reviews);
      res.send(reviews);
    }
  });
});


app.listen(Port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${Port}`);
});

// app.get('/api/amenities', (req, res) => {
//   db.getAmenenities((err, amenData) => {
//     if (err) {
//       throw err;
//     } else {
//       const stringedAmenData = JSON.stringify(amenData);
//       res.end(stringedAmenData);
//     }
//   });
// });

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
      res.send(reviews);
      res.end();
    }
  });
});

app.get('/api/authors', (req, res) => {
  db.getAuthors((err, authors) => {
    if (err) {
      console.log(err);
    } else {
      res.send(authors);
      res.end();
    }
  });
});


app.listen(Port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${Port}`);
});

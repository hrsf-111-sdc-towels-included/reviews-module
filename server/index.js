const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const riakConnection = require('../db/riak/index.js');

const app = express();
const Port = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());

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
  .put(riakConnection.updateReview)

  // Delete
  .delete(riakConnection.deleteReview);


// ────────────────────────────────────────────────────────────────────────────────


app.listen(Port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${Port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const Port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});

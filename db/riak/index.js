const Riak = require('basho-riak-client');

const riakNodes = ['localhost:8087'];

const createClient = (cb) => {
  return new Riak.Client(riakNodes, cb);
};

const client = createClient((err) => {
  if (err) throw new Error(err);
  console.log(`Connected to Riak at: ${riakNodes.toString()}`);
});

module.exports = client;
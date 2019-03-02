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

// const client = createClient((err) => {
//   if (err) throw new Error(err);
//   client.storeValue({
//     bucket: 'this-is-a-test-bucket',
//     key: 'my-test-key',
//     value: {
//       value: '!!!!hey this is a test object!!!!',
//     },
//   }, (err) => {
//     if (err) return new Error(err);
//     client.fetchValue({
//       bucket: 'this-is-a-test-bucket',
//       key: 'my-test-key',
//     }, (err, res, data) => {
//       if (err) return new Error(err);
//       console.log(res.values[0].value.toString());
//     });
//   });
// });

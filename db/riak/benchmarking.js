const async = require('async');

const riakClient = require('./index.js');

const asyncFunctions = [];

for (let current = 1; current < 10001; current += 1) ((current) => {
  asyncFunctions.push((asyncCB) => {
    riakClient.fetchValue({
      bucket: 'this-is-a-test-bucket',
      key: current.toString(),
      convertToJs: true,
    }, (err, data) => {
      if (err) return new Error(err);
      if (current === 100) {
        console.log(`Fetched ${current}!!!!!`);
        console.log(JSON.stringify(data.values[0].value));
      }
    });
  });
})(current);

async.parallel(asyncFunctions, (err) => {
  if (err) return new Error(err);
  console.log('Operation complete!');
});

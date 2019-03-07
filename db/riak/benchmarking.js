const async = require('async');

const riakClient = require('./index.js');

const asyncFunctions = [];

for (let current = 990000; current < 1000000; current += 1) ((current) => {
  asyncFunctions.push((asyncCB) => {
    riakClient.fetchValue({
      bucket: 'this-is-a-test-bucket',
      key: current.toString(),
      convertToJs: true,
    }, (err, data) => {
      if (err) return new Error(err);
      if (current === 100) {
        console.log(`Fetched ${current}!!!!!`);
        // console.log(JSON.stringify(data.values[0].value));
      }
      asyncCB(err);
    });
  });
})(current);

const startTimer = new Date();

async.parallel(asyncFunctions, (err) => {
  console.log('Made it here');
  if (err) return new Error(err);
  const endTimer = new Date();
  console.log(`Operation complete! Took ${endTimer - startTimer}ms`);
});

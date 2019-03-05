const fs = require('fs');

const helpers = require('./helpers.js');

const sdcUsers = fs.createWriteStream('./db/sdc/sdc_users.csv');
const sdcReviews = fs.createWriteStream('./db/sdc/sdc_reviews.csv');

function writeNTimes(n, dataGenerator, writer, encoding, callback) {
  const startTimer = new Date();
  let i = n + 1;
  let data;
  const write = () => {
    let ok = true;
    do {
      data = dataGenerator(i);
      if (i === n + 1) {
        data = dataGenerator.schema;
        writer.write(data, encoding);
      } else if (i === 1) {
        // last time!
        writer.write(data, encoding, callback);
        const endTimer = new Date();
        console.log(`Operation completed in ${endTimer - startTimer}ms`);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
      i -= 1;
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  };
  write();
}

writeNTimes(100000, helpers.usernameGenerator, sdcUsers, 'utf-8', (err) => {
  if (err) throw new Error(err);
  console.log('Write operation complete!');
});

writeNTimes(10000000, helpers.reviewsGenerator, sdcReviews, 'utf-8', (err) => {
  if (err) throw new Error(err);
  console.log('Write operation complete!');
});

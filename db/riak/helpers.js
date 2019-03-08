const faker = require('faker');
const moment = require('moment');

module.exports.uuid = (
  a                  // placeholder
) => {
  return a           // if the placeholder was passed, return
    ? (              // a random number from 0 to 15
      a ^            // unless b is 8,
      Math.random()  // in which case
      * 16           // a random number from
      >> a/4         // 8 to 11
      ).toString(16) // in hexadecimal
    : (              // or otherwise a concatenated string:
      [1e5] +        // 10000000 +
      -1e3
      ).replace(     // replacing
        /[018]/g,    // zeroes, ones, and eights with
        module.exports.uuid            // random hex digits
      )
}

module.exports.reviewsGenerator = (current) => {
  const reviews = [];
  const amountOfReviews = faker.random.number({ min: 10, max: 20 });
  for (let i = 0; i < amountOfReviews; i += 1) {
    const createdAt = moment(faker.date.past(2, new Date())).format('YYYY-MM-DD');
    reviews.push({
      createdAt,
      homeID: current,
      reviewID: module.exports.uuid(),
      username: faker.image.avatar().slice(47, -8),
      // ^^ complete url is "https://s3.amazonaws.com/uifaces/faces/twitter/<username>/128.jpg"
      accuracy: faker.random.number({ min: 1, max: 5 }),
      communication: faker.random.number({ min: 1, max: 5 }),
      cleanliness: faker.random.number({ min: 1, max: 5 }),
      location: faker.random.number({ min: 1, max: 5 }),
      checkIn: faker.random.number({ min: 1, max: 5 }),
      value: faker.random.number({ min: 1, max: 5 }),
      complaints: faker.random.boolean(),
      comment: faker.lorem.sentences(),
    });
  }
  reviews.sort((a, b) => {
    const dashRegex = new RegExp('-', 'g');
    const aNumber = Number(a.createdAt.replace(dashRegex, ''));
    const bNumber = Number(b.createdAt.replace(dashRegex, ''));
    return aNumber - bNumber;
  })
  return reviews;
};

module.exports.validateBatch = (totalToWrite, batchSize) => {
  if (totalToWrite % batchSize !== 0) {
    throw new Error(`Invalid batch size! ${totalToWrite}%${batchSize} === ${totalToWrite % batchSize}`);
  }
};

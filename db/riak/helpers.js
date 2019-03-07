const faker = require('faker');
const moment = require('moment');

module.exports.reviewsGenerator = (current) => {
  const reviews = [];
  const amountOfReviews = faker.random.number({ min: 10, max: 20 });
  for (let i = 0; i < amountOfReviews; i += 1) {
    reviews.push({
      homeID: current,
      username: faker.image.avatar().slice(47, -8),
      // ^^ complete url is "https://s3.amazonaws.com/uifaces/faces/twitter/<username>/128.jpg"
      accuracy: faker.random.number({ min: 1, max: 5 }),
      communication: faker.random.number({ min: 1, max: 5 }),
      cleanliness: faker.random.number({ min: 1, max: 5 }),
      location: faker.random.number({ min: 1, max: 5 }),
      checkIn: faker.random.number({ min: 1, max: 5 }),
      value: faker.random.number({ min: 1, max: 5 }),
      complaints: faker.random.number({ min: 0, max: 1 }),
      comment: faker.lorem.sentences(),
      createdAt: moment(faker.date.past(2, new Date())).format('YYYY-MM-DD'),
    });
  }
  return reviews;
};

module.exports.validateBatch = (totalToWrite, batchSize) => {
  if (totalToWrite % batchSize !== 0) {
    throw new Error(`Invalid batch size! ${totalToWrite}%${batchSize} === ${totalToWrite % batchSize}`);
  }
};

const faker = require('faker');
const moment = require('moment');

module.exports.usernameGenerator = () => {
  let username = faker.image.avatar().slice(47, -8);
  // complete url is "https://s3.amazonaws.com/uifaces/faces/twitter/<username>/128.jpg"
  return `${username}\n`;
};
module.exports.usernameGenerator.schema = 'username\n';

module.exports.reviewsGenerator = (current) => {
  let reviews = '';
  const amountOfReviews = faker.random.number({ min: 10, max: 20 });
  for (let i = 0; i < amountOfReviews; i += 1) {
    const homeID = current;
    const userID = faker.random.number({ min: 1, max: 1257 });
    const accuracy = faker.random.number({ min: 1, max: 5 });
    const communication = faker.random.number({ min: 1, max: 5 });
    const cleanliness = faker.random.number({ min: 1, max: 5 });
    const location = faker.random.number({ min: 1, max: 5 });
    const checkIn = faker.random.number({ min: 1, max: 5 });
    const value = faker.random.number({ min: 1, max: 5 });
    const complaints = faker.random.number({ min: 0, max: 1 });
    const comment = faker.lorem.sentences();
    const createdAt = moment(faker.date.past(2, new Date())).format('YYYY-MM-DD');
    reviews += `${homeID},${userID},${accuracy},${communication},${cleanliness},${location},${checkIn},${value},${complaints},${comment},${createdAt}\n`;
  }
  return reviews;
};
module.exports.reviewsGenerator.schema = 'home_id,user_id,accuracy,communication,cleanliness,location,check_in,value,complaints,comment,created_at\n';

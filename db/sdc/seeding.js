const fs = require('fs');
const faker = require('faker');
const moment = require('moment');

const sdcUsers = fs.createWriteStream('./db/sdc/sdc_users.csv');
const sdcReviews = fs.createWriteStream('./db/sdc/sdc_reviews.csv');

const usernameGenerator = () => {
  let username = faker.image.avatar().slice(47, -8);
  // complete url is "https://s3.amazonaws.com/uifaces/faces/twitter/<username>/128.jpg"
  return `${username}\n`;
};
usernameGenerator.schema = 'username\n';

//       fakeReview = {
//         home_id: i,
//         accuracy: faker.random.number({ min: 1, max: 5 }),
//         communication: faker.random.number({ min: 1, max: 5 }),
//         cleanliness: faker.random.number({ min: 1, max: 5 }),
//         location: faker.random.number({ min: 1, max: 5 }),
//         check_in: faker.random.number({ min: 1, max: 5 }),
//         value: faker.random.number({ min: 1, max: 5 }),
//         complaints: faker.random.boolean(),
//         comment: faker.lorem.sentences(),
//         created_at: faker.date.past(2, new Date()),
//       };

const reviewsGenerator = (current) => {
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
reviewsGenerator.schema = 'home_id,user_id,accuracy,communication,cleanliness,location,check_in,value,complaints,comment,created_at\n';

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

writeNTimes(100000, usernameGenerator, sdcUsers, 'utf-8', (err) => {
  if (err) throw new Error(err);
  console.log('Write operation complete!');
});

writeNTimes(10000000, reviewsGenerator, sdcReviews, 'utf-8', (err) => {
  if (err) throw new Error(err);
  console.log('Write operation complete!');
});

// const reviewsGenerator = () => {
//   const fakeReviews = [];
//   let fakeReview;
//   const startTimer = new Date();
//   for (let i = 0; i < 100; i += 1) {
//     for (let j = 0; j < 5; j += 1) {
//       fakeReview = {
//         author_name: faker.name.findName(),
//         image_url: faker.image.avatar(),
//         home_id: i,
//         accuracy: faker.random.number({ min: 1, max: 5 }),
//         communication: faker.random.number({ min: 1, max: 5 }),
//         cleanliness: faker.random.number({ min: 1, max: 5 }),
//         location: faker.random.number({ min: 1, max: 5 }),
//         check_in: faker.random.number({ min: 1, max: 5 }),
//         value: faker.random.number({ min: 1, max: 5 }),
//         complaints: faker.random.boolean(),
//         comment: faker.lorem.sentences(),
//         created_at: faker.date.past(2, new Date()),
//       };
//       fakeReviews.push(fakeReview);
//     }
//   }
//   const endTimer = new Date();
//   console.log(`Data generated in ${endTimer - startTimer}ms`);
//   return fakeReviews;
// };

// CREATE TABLE sdc_users (
//   id int NOT NULL AUTO_INCREMENT,
//   username varchar(30) NOT NULL,
//   PRIMARY KEY (id),
//   UNIQUE KEY (username)
// );
// mysqlimport  --ignore-lines=1 --fields-terminated-by=,
// --columns='username' --local -u root
// sdc_reviews /Users/johncastberg/Documents/Hack Reactor/hrsf-111/sdc/reviews-module/db/sdc/sdc_users.csv

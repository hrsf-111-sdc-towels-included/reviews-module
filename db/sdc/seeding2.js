const fs = require('fs');
const faker = require('faker');

const sdcUsers = fs.createWriteStream('./db/sdc/sdc_users.csv');

function writeNTimes(n, writer, encoding, callback) {
  const startTimer = new Date();
  let i = n + 1;
  let username;
  let data;
  const write = () => {
    let ok = true;
    do {
      username = faker.image.avatar().slice(47, -8);
      // complete url is "https://s3.amazonaws.com/uifaces/faces/twitter/<username>/128.jpg"
      data = `${username}\n`;
      if (i === 1) {
        // last time!
        writer.write(data, encoding, callback);
        const endTimer = new Date();
        console.log(`Operation completed in ${endTimer - startTimer}ms`);
      } else if (i === n + 1) {
        writer.write('username\n', encoding);
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

writeNTimes(100000, sdcUsers, 'utf-8', (err) => {
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

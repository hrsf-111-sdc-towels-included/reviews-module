/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
const async = require('async');

const riakClient = require('./index.js');
const helpers = require('./helpers.js');

const writeToRiakNTimes = (writeOptions, callback) => {
  if (!writeOptions.currentValue) {
    writeOptions.currentValue = 1;
  }
  let { currentValue } = writeOptions;
  const { dataGenerator, bucket, batchSize, totalToWrite } = writeOptions;
  const currentBatch = currentValue + (batchSize - 1);
  const asyncFunctions = [];

  // Validate that batch size % total to write === 0
  helpers.validateBatch(totalToWrite, batchSize);

  // Used IIFE here to maintain unique scopes for each iteration
  for (currentValue; currentValue <= currentBatch; currentValue += 1) ((currentValue) => {
    const key = currentValue.toString();
    const value = dataGenerator(currentValue); // { thisIsATest: '1626' };
    const options = { bucket, key, value };

    asyncFunctions.push((asyncCB) => {
      riakClient.storeValue(options, err => asyncCB(err));
      // setTimeout(() => {
      //   console.log(JSON.stringify(options.value));
      //   asyncCB(null);
      // });
    });
  })(currentValue);

  // Loop will eventually set current value to totalToWrite plus one
  if (currentValue !== totalToWrite + 1) {
    async.parallel(asyncFunctions, (err) => {
      if (err) throw new Error(err);
      // Reset the current value on writeOptions
      writeOptions.currentValue = currentValue;
      writeToRiakNTimes(writeOptions, callback);
    });
  } else {
    // Last write!!
    async.parallel(asyncFunctions, callback);
  }
};

const start = new Date();
writeToRiakNTimes({
  dataGenerator: helpers.reviewsGenerator,
  bucket: 'sdc_reviews',
  batchSize: 1000,
  totalToWrite: 10000000,
}, (err) => {
  if (err) throw new Error(err);
  const end = new Date();
  console.log(`Operation Finished! Took ${end - start}ms.`);
});

// riakClient.fetchValue({
//   bucket: 'this-is-a-test-bucket',
//   key: '10000000',
//   convertToJs: true,
// }, (err, data) => {
//   if (err) return new Error(err);
//   const end = new Date();
//   console.log(JSON.stringify(data.values[0].value));
//   console.log(`Operation Finished! Took ${end - start}ms.`);
// });

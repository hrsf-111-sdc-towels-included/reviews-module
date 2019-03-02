/* eslint-disable no-loop-func */
const async = require('async');
// const riakClient = require('./index.js');

// riakClient.storeValue({
//   bucket: 'this-is-a-test-bucket',
//   key: 'abcd',
//   value: [{ a: 1 }, { b: 2 }],
// }, (err) => {
//   if (err) throw new Error(err);
//   console.log('Wrote abcd');
//   riakClient.fetchValue({
//     bucket: 'this-is-a-test-bucket',
//     key: 'abcd',
//     convertToJs: true,
//   }, (err, rslt) => {
//     if (err) throw new Error(err);
//     console.log('And here it is:', JSON.stringify(rslt.values[0].value));
//   });
// });

/* Inputs: Data generator, amount of records written,
* total amount of records to write, callback
* *
* Outputs: confirmation that each set of records was written
* final confirmation that the set is written
*/

const validateBatch = (batchSize, totalToWrite) => {
  if (totalToWrite % batchSize !== 0) {
    throw new Error(`Invalid batch size! ${totalToWrite}%${batchSize} === ${totalToWrite % batchSize}`);
  }
};

// writeToRiakNTimes((startingValue) => {
//   return {
//     thisIsTheStartingValue: startingValue,
//   };
// }, 1, 10, 100, (err) => {
//   if (err) throw new Error(err);
//   console.log('Operation Finished!');
// });

const writeToRiakNTimes = (dataGenerator, startingValue, batchSize, totalToWrite, finalCallback) => {
  validateBatch(batchSize, totalToWrite);
  const currentBatch = startingValue + (batchSize - 1);
  const asyncFunctions = [];
  while (startingValue <= currentBatch && startingValue <= totalToWrite) {
    for (startingValue; startingValue <= currentBatch; startingValue += 1) ((startingValue) => {
      const bucket = 'this-is-a-test-bucket';
      const key = startingValue.toString();
      const value = dataGenerator(startingValue);
      const options = {
        bucket,
        key,
        value,
      };
      asyncFunctions.push((asyncCB) => {
        setTimeout(() => {
          asyncCB(null);
        }, 0);
      });
    })(startingValue);
    if (startingValue !== totalToWrite + 1) {
      async.parallel(asyncFunctions, (err) => {
        if (err) throw new Error(err);
        writeToRiakNTimes(dataGenerator, startingValue, batchSize, totalToWrite, finalCallback);
      });
    } else {
      // Last write!!
      async.parallel(asyncFunctions, finalCallback);
    }
  }
};

writeToRiakNTimes((startingValue) => {
  return {
    thisIsTheStartingValue: startingValue,
  };
}, 1, 10, 20, (err) => {
  if (err) throw new Error(err);
  console.log('Operation Finished!', writeCounter);
});

// function writeNTimes(n, dataGenerator, writer, encoding, callback) {
//   const startTimer = new Date();
//   let i = n + 1;
//   let data;
//   const write = () => {
//     let ok = true;
//     do {
//       data = dataGenerator(i);
//       if (i === n + 1) {
//         data = dataGenerator.schema;
//         writer.write(data, encoding);
//       } else if (i === 1) {
//         // last time!
//         writer.write(data, encoding, callback);
//         const endTimer = new Date();
//         console.log(`Operation completed in ${endTimer - startTimer}ms`);
//       } else {
//         // see if we should continue, or wait
//         // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//       i -= 1;
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // had to stop early!
//       // write some more once it drains
//       writer.once('drain', write);
//     }
//   };
//   write();
// }

// for (let i = 0; i < 100; i++) {
//   asyncFunctions.push(() => {
//     riakClient.storeValue({
//       bucket: 'this-is-a-test-bucket',
//       key: i.toString(),
//       value: {
//         value: `!!!!hey ${i} this is a test ${i} object!!!!`,
//       },
//     }, (err) => {
//       if (err) throw new Error(err);
//       console.log(`Wrote ${i}`);
//     });
//   });
// }

// async.parallel(asyncFunctions, (err, rslts) => {
//   if (err) {
//     throw new Error(err);
//   } else {
//     console.log('[TasteOfRiakIntro] people stored in Riak');
//   }
// });

// for (let i = 0; i < 10; i++) {
//   asyncFunctions.push(() => {
//     riakClient.fetchValue({
//       bucket: 'this-is-a-test-bucket',
//       key: i.toString(),
//       convertToJs: true,
//     },
//     (err, rslt) => {
//       if (err) return new Error(err);
//       console.log(JSON.stringify(rslt.values[0].value));
//     });
//   });
// }

// async.parallel(asyncFunctions, (err, rslts) => {
//   if (err) {
//     throw new Error(err);
//   } else {
//     console.log('[TasteOfRiakIntro] people stored in Riak');
//   }
// });
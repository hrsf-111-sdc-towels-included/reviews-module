# TOWELS INCLUDED
## Reviews Sample Queries

## Create a Review
#### MySql
##### Query:
```sql
INSERT INTO sdc_reviews (home_id, user_id, accuracy, communication, cleanliness, location, check_in, value, complaints, comment, created_at) VALUES (123, 5, 3, 4, 1, 3, 2, 3, 4, 'This is a sample comment', '2018-07-09');
```
#### Riak
##### Query:
```javascript
const riakObj = new Riak.Commands.KV.RiakObject();
riakObj.setContentType('application/json');
riakObj.setValue({
  homeID: 10000000,
  username: 'zauerkraut',
  accuracy: 5,
  communication: 5,
  cleanliness: 2,
  location: 2,
  checkIn: 4,
  value: 5,
  complaints: false,
  comment: 'Quia delectus hic nam explicabo sed assumenda veniam molestiae. Consequatur totam quas iste occaecati sunt nemo.',
  createdAt:'2019-02-23'
});
client.storeValue({
  bucket: 'sdc_reviews', key: '1234', value: riakObj
}, function (err) {
  if (err) throw new Error(err);
});
```

## Get All Reviews For a Listing
#### MySql
##### Query:
```sql
SELECT sdc_reviews.id sdc_users.username, accuracy, communication, cleanliness, location, check_in, value, complaints, comment, created_at FROM sdc_reviews JOIN sdc_users WHERE home_id = 123 AND user_id = sdc_users.id GROUP BY sdc_reviews.id ORDER BY sdc_reviews.created_at DESC;
```
##### Response:
```javascript
[
	{
    id: 12345,
		username: 'magoo04',
		accuracy: 3,
		communication: 4,
		cleanliness: 1,
		location: 3,
		check_in: 2,
		value: 3,
		complaints: 4,
		comment: 'This is a sample comment',
		created_at: '2018-07-09'
	},
	{
    id: 12346,
		username: 'salleedesign',
		accuracy: 1,
		communication: 1,
		cleanliness: 3,
		location: 4,
		check_in: 4,
		value: 5,
		complaints: 1,
		comment: 'Nisi culpa et excepturi. Numquam enim quo fugiat. Accusamus ad accusantium tempore sequi sint veniam et aliquid. Nesciunt eligendi saepe laudantium ea. Quibusdam enim repellendus possimus officiis cumque minus laborum.',
		created_at: '2018-06-24'
  },
  ...
]
```
#### Riak
##### Query:
```javascript
riakClient.fetchValue({
  bucket: 'sdc_reviews',
  key: '1234',
  convertToJs: true,
}, (err, data) => {
  if (err) return new Error(err);
  // Send data back to client
});
```
##### Response:
```javascript
[ 
  {
    homeID: 1234,
    username: 'sangdth',
    accuracy: 4,
    communication: 3,
    cleanliness: 5,
    location: 4,
    checkIn: 1,
    value: 1,
    complaints: true,
    comment:
     'Numquam qui officia voluptas. Natus error beatae. Qui dolorum voluptate sed vitae dolores illo explicaboprovident.',
    createdAt: '2017-12-02'
  },
  {
    homeID: 1234,
    username: 'martinansty',
    accuracy: 1,
    communication: 3,
    cleanliness: 2,
    location: 2,
    checkIn: 2,
    value: 4,
    complaints: false,
    comment:
     'Officia non ad ullam possimus minus praesentium eius sit. Ipsum non rem. Non quibusdam perspiciatis rem voluptatem nam. Veritatis distinctio aspernatur. Id aut eum cumque consequatur.',
    createdAt: '2017-10-12'
  },
  ...
]
```

## Update a Review
#### MySql
##### Query:
```sql
UPDATE sdc_reviews SET comment = 'I changed my mind, I actually had a good time' WHERE id = '150002974';
```
#### Riak
##### Query:
```javascript
const updatedReview = { updatedField: 'updated' }
const options = { bucket: 'sdc_reviews', key: '100' }
riakClient.fetchValue(options, (err, rslt) => {
    if (err) throw new Error(err);
    const fetchedObj = rslt.values.shift();
    fetchedObj.setValue(updatedReview);
    options.value = fetchedObj;
    options.returnBody = true;
    riakClient.storeValue(options, (err) => {
        if (err) throw new Error(err);
        delete options.value;
        delete options.returnBody;
    });
});
```

## Delete a Review
#### MySql
##### Query:
```sql
DELETE FROM sdc_reviews WHERE id = '150002974';
```
#### Riak
##### Query:
```javascript
options = { bucket: 'sdc_users', key: '123' };
client.deleteValue(options, (err, rslt) => {
    if (err) throw new Error(err);
});
```

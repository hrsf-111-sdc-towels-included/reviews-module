# TOWELS INCLUDED
## Reviews API Documentation

## Related Projects

  - [Proxy Server That Connects All Services](https://github.com/hrsf-111-sdc-towels-included/reviews-proxy-server)

  - https://github.com/hrsf-111-sdc-towels-included/amenities-module-master
  - https://github.com/hrsf-111-sdc-towels-included/booking-module
  - https://github.com/hrsf-111-sdc-towels-included/photos-module

## Table of Contents
1. [Create](#Create)
1. [Read](#Read)
1. [Update](#Update)
1. [Delete](#Delete)

## Create
#### - POST -
>`/reviews/<itemID>`
#### Parameters
> itemID - Integer
#### Request
> Expected Data On Body:
```javascript
{
    "author": { // An object representing the author of a review
      "author_id": integer, // The author's unique identifier
      "name": string, // The name of the author
      "img_url": string, // The url of the author's avatar
    },
    "home_id": integer, // The home's unique identifier
    "accuracy": integer, // The user rating (base 5) of the accuracy of the post against their experience.
    "communication": integer, // The user rating (base 5) of the quality of communication
    "cleanliness": integer, // The user rating (base 5) of the cleanliness of the home
    "location": integer, // The user rating (base 5) of the location of the home
    "check_in": integer, // The user rating (base 5) of the user's check in experience
    "value": integer, // The user rating (base 5) of the value of the home
    "complaints": boolean, // a flag marking if viewers of a review have submitted a complaint about the content of the review (should default to false)
    "comment": string, // The user's text review
    "created_at": date // the date/time that the review was written
}
```
#### Success 201
> No Data Returned

#### Failure 400
> No Data Returned

## Read
#### - GET -
>`/reviews/<itemID>`
#### Parameters
> itemID - Integer
#### Request
> No Expected Data On Body

#### Success 201
> Array of objects with these properties:
```javascript
{
    "author": { // An object representing the author of a review
      "author_id": integer, // The author's unique identifier
      "name": string, // The name of the author
      "img_url": string, // The url of the author's avatar
    },
    "home_id": integer, // The home's unique identifier
    "accuracy": integer, // The user rating (base 5) of the accuracy of the post against their experience.
    "communication": integer, // The user rating (base 5) of the quality of communication
    "cleanliness": integer, // The user rating (base 5) of the cleanliness of the home
    "location": integer, // The user rating (base 5) of the location of the home
    "check_in": integer, // The user rating (base 5) of the user's check in experience
    "value": integer, // The user rating (base 5) of the value of the home
    "complaints": boolean, // a flag marking if viewers of a review have submitted a complaint about the content of the review (should default to false)
    "comment": string, // The user's text review
    "created_at": date // the date/time that the review was written
}
```

#### Failure 400
> No Data Returned

## Update
#### - PUT -
>`/reviews/<itemID>`
#### Parameters
> itemID - Integer
#### Request
> Expected Data On Body:
```javascript
{
    "author": { // An object representing the author of a review
      "author_id": integer, // The author's unique identifier
      "name": string, // The name of the author
      "img_url": string, // The url of the author's avatar
    },
    "home_id": integer, // The home's unique identifier
    "accuracy": integer, // The user rating (base 5) of the accuracy of the post against their experience.
    "communication": integer, // The user rating (base 5) of the quality of communication
    "cleanliness": integer, // The user rating (base 5) of the cleanliness of the home
    "location": integer, // The user rating (base 5) of the location of the home
    "check_in": integer, // The user rating (base 5) of the user's check in experience
    "value": integer, // The user rating (base 5) of the value of the home
    "complaints": boolean, // a flag marking if viewers of a review have submitted a complaint about the content of the review (should default to false)
    "comment": string, // The user's text review
    "created_at": date // the date/time that the review was written
}
```
#### Success 201
> No Data Returned

#### Failure 400
> No Data Returned

## DELETE
#### - DELETE -
>`/reviews/<itemID>`
#### Parameters
> itemID - Integer
#### Request
> Expected Data On Body:
```javascript
{
    "review_id": string, // The ID of the review to delete
}
```
#### Success 201
> No Data Returned

#### Failure 400
> No Data Returned

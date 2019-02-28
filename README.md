# TOWELS INCLUDED
## Reviews API Documentation

## Related Projects

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
```json
{
    author: {
      name: string,
      img_url: string,
    }
    review_id: string,
    author_id: integer,
    home_id: integer,
    accuracy: integer,
    communication: integer,
    cleanliness: integer,
    location: integer,
    check_in: integer,
    value: integer,
    complaints: boolean,
    comment: string,
    created_at: date
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
```json
{
    author: {
      name: string,
      img_url: string,
    }
    review_id: string,
    author_id: integer,
    home_id: integer,
    accuracy: integer,
    communication: integer,
    cleanliness: integer,
    location: integer,
    check_in: integer,
    value: integer,
    complaints: boolean,
    comment: string,
    created_at: date
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
```json
{
    author: {
      name: string,
      img_url: string,
    }
    review_id: string,
    author_id: integer,
    home_id: integer,
    accuracy: integer,
    communication: integer,
    cleanliness: integer,
    location: integer,
    check_in: integer,
    value: integer,
    complaints: boolean,
    comment: string,
    created_at: date
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
```json
{
    review_id: string,
}
```
#### Success 201
> No Data Returned

#### Failure 400
> No Data Returned

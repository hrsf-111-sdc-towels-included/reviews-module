# Artillery Configs/Results

## GET Requests
#### Configuration
```yml
config:
  target: 'http://localhost:3004'
  phases:
    - duration: 60
      arrivalRate: 1000
scenarios:
  - flow:
    - get:
        url: "/reviews/{{$randomNumber(1, 10000000)}}"
```

#### Results
```
Summary report @ 16:07:23(-0800) 2019-03-09
  Scenarios launched:  60000
  Scenarios completed: 59490
  Requests completed:  59490
  RPS sent: 379.31
  Request latency:
    min: 4.5
    max: 23784.2
    median: 17.2
    p95: 14922.5
    p99: 23041.3
  Scenario counts:
    0: 60000 (100%)
  Codes:
    200: 59490
  Errors:
    ECONNRESET: 310
    ETIMEDOUT: 200
```

## POST Requests
#### Configuration
```yml
config:
  target: "http://localhost:3004"
  phases:
    - duration: 60
      arrivalRate: 1000
  processor: "./artilleryDataGenerator.js"
scenarios:
- name: "Post a review"
  flow:
    - function: "generateReview"
    - post:
        url: "/reviews/{{ homeID }}"
        json:
          createdAt: "{{ createdAt }}"
          homeID: "{{ homeID }}"
          reviewID: "{{ reviewID }}"
          username: "{{ username }}"
          accuracy: "{{ accuracy }}"
          communication: "{{ communication }}"
          cleanliness: "{{ cleanliness }}"
          location: "{{ location }}"
          checkIn: "{{ checkIn }}"
          value: "{{ value }}"
          complaints: "{{ complaints }}"
          comment: "{{ comment }}"
```

#### Results
```
Summary report @ 15:55:23(-0800) 2019-03-09
  Scenarios launched:  60000
  Scenarios completed: 59214
  Requests completed:  59214
  RPS sent: 352.98
  Request latency:
    min: 7.2
    max: 7924
    median: 12.2
    p95: 54.7
    p99: 209.4
  Scenario counts:
    Post a review: 60000 (100%)
  Codes:
    201: 59214
  Errors:
    ECONNRESET: 786
```

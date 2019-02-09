

CREATE DATABASE reviewsData

use reviewsData;

CREATE TABLE Homes (
    id INT NOT NULL AUTO_INCREMENT = 100,
    name VARCHAR(150) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Authors (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(42) NOT NULL,
    img_url VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE Reviews (
    id INT NOT NULL AUTO_INCREMENT,
    author_id INT NOT NULL,
    home_id INT NOT NULL,
    accuracy INT NOT NULL,
    communication INT NOT NULL,
    cleanliness INT NOT NULL,
    location INT NOT NULL,
    check_in INT NOT NULL,
    value INT NOT NULL,
    complaints BOOLEAN,
    comment VARCHAR(500),
    created_at date,
    PRIMARY KEY (id),
)

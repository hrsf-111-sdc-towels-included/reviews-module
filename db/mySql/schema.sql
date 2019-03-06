CREATE TABLE sdc_users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (username)
);

CREATE TABLE sdc_reviews (
  id int NOT NULL AUTO_INCREMENT,
  home_id int NOT NULL,
  user_id int NOT NULL,
  accuracy int NOT NULL,
  communication int NOT NULL,
  cleanliness int NOT NULL,
  location int NOT NULL,
  check_in int NOT NULL,
  value int NOT NULL,
  complaints int NOT NULL,
  comment varchar(500) NOT NULL,
  created_at date NOT NULL,
  PRIMARY KEY (id)
);

-- SELECT * FROM sdc_reviews, sdc_users WHERE home_id=1 AND sdc_reviews.user_id = sdc_users.id ORDER BY sdc_reviews.created_at;

-- mysqlimport  --ignore-lines=1 --fields-terminated-by=,
-- --columns='home_id,user_id,accuracy,communication,cleanliness,location,check_in,value,complaints,comment,created_at' --local -u root
-- sdc_reviews /Users/johncastberg/Documents/Hack\ Reactor/hrsf-111/sdc/reviews-module/db/sdc/sdc_reviews.csv
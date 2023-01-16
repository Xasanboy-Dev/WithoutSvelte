CREATE TABLE users (
id BIGSERIAL NOT NULL PRIMARY KEY,
name TEXT NOT NULL,
lastname  TEXT NOT NULL,
email TEXT NOT NULL,
password TEXT NOT NULL,
gender TEXT NOT NULL,
country TEXT NOT NULL,
age TEXT NOT NULL
);
INSERT INTO users (name,lastname,email,password,gender,country,age)
VALUES ('Xasanboy','Abdurasulov','hasanbojabdurasulov309@gmail.com','+919928473','Male','Uzbekistan','2007');


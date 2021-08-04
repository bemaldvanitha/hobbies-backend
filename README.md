# hobbies-backend

~ change nesseary db configations

~ run
  CREATE DATABASE hobbies
  CREATE TABLE hobby (id int PRIMARY KEY, name varchar(50), imageUrl varchar(200));
  CREATE TABLE tele_numbers (id int PRIMARY KEY, 	userId int, number varchar(50), name varchar(50));
  CREATE TABLE user_hobbies (userId int, hobbyId int);
  CREATE TABLE users (id int PRIMARY KEY, firstName varchar(50), lastName varchar(50), email varchar(50), age int, imageUrl varchar(200), password varchar(100));
  
  

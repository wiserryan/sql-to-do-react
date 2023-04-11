-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- CREATE DATABASE "to-do-list.sql";

-- Table structure

CREATE TABLE todolist (
	"id" SERIAL PRIMARY KEY,
	"taskname" VARCHAR (300) NOT NULL,
	"date" VARCHAR (100)
	"kidsMeal" BOOLEAN DEFAULT FALSE 
	"status" BOOLEAN DEFAULT FALSE 
);

INSERT INTO "todolist" ("taskname", "date", "kidsMeal", "status")
VALUES ('test', 'test unit');

--select * from todolist


-- -- Table structure

-- CREATE TABLE todolist (
-- 	id SERIAL PRIMARY KEY,
-- 	name varchar(25) NOT NULL,
-- 	quantity DECIMAL(16, 2) NOT NULL,
-- 	unit varchar(50) 
-- );

-- INSERT INTO todolist (name, quantity, unit)
-- VALUES ('test', 5, 'test unit');

-- --select * from todolist
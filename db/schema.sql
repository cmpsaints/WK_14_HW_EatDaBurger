DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	eaten_status BOOLEAN DEFAULT 0 NOT NULL,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
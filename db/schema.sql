CREATE DATABASE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    burger_name VARCHAR(50),
    devoured BOOLEAN
)
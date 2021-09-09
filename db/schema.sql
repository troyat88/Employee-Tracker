CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
dep_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name_ VARCHAR(30)
);

CREATE TABLE role (
role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL, 
department_id INT
);

CREATE TABLE employee (
emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30), 
role_id INT,
manager_id INT
);




USE employee_db

INSERT INTO department (name_)
VALUES ("Customer Service"),
       ("Management"),
       ("Training"),
       ("Facility");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Rep", 40000.00, 1),
       ("Customer Service Lead", 60000.00, 1),
       ("General Manager", 75000.00, 2),
       ("Regional Manager", 85000.00, 2),
       ("Training Manager", 80000.00, 2),
       ("Group Coach", 40000.00, 3),
       ("Personal Trainer", 40000.00, 3),
       ("Equipment Manager", 250000.00, 4);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Taylor", "Swift", 4, NULL),
       ("Post", "Malone", 3, 1),
       ("Celine", "Dion", 2, 2),
       ("Billie", "Eilish", 5, NULL),
       ("Drake", "Drakerson", 6, 4),
       ("YoungBoy", "NeverBrokeAgain", 7, 4),
       ("lil", "Baby", 8, 3);
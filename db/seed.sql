USE employ;

INSERT into department (name) VALUES ("Sales");
INSERT into department (name) VALUES ("IT");
INSERT into department (name) VALUES ("Manager");
INSERT into department (name) VALUES ("HR");

INSERT into role (title, salary, department_id) VALUES ("Sales Manager", 129865, 1);
INSERT into role (title, salary, department_id) VALUES ("Sales person", 53987, 1);
INSERT into role (title, salary, department_id) VALUES ("IT Manager", 136758, 2);
INSERT into role (title, salary, department_id) VALUES ("Engineer", 987653, 2);
INSERT into role (title, salary, department_id) VALUES ("Manager", 178065, 3);
INSERT into role (title, salary, department_id) VALUES ("Artist ", 32345, 3);
INSERT into role (title, salary, department_id) VALUES ("Musician ", 329787, 3);
INSERT into role (title, salary, department_id) VALUES ("Comedian ", 344321, 3);
INSERT into role (title, salary, department_id) VALUES ("Counselor", 845789, 4);
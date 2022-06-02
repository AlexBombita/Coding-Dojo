INSERT INTO dojos(name)
VALUES ("san jose"), ("seattle"), ("las vegas");
SELECT * FROM dojos;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM dojos;
SELECT * FROM dojos;

INSERT INTO dojos(name)
VALUES ("san francisco"), ("los angeles"), ("new york");
SELECT * FROM dojos;

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ('alex', 'anderson',21, 7), ('bob', 'brown',22,7), ('charlie', 'custard',23,7);
SELECT * FROM ninjas;

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ('dylan', 'damon',21, 8), ('eric', 'echo',22,8), ('fred', 'fox',23,8);
SELECT * FROM ninjas;

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ('greg', 'garrison',21, 9), ('harold', 'heidi',22,9), ('jack', 'jacobson',23,9);
SELECT * FROM ninjas;

SELECT * FROM ninjas
WHERE dojo_id = 7;

SELECT * FROM ninjas
WHERE dojo_id = 9;

SELECT name FROM dojos
WHERE dojos.id = (SELECT dojo_id FROM ninjas ORDER BY id DESC LIMIT 1);
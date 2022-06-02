INSERT INTO authors(name)
VALUES ('Jane Austen'), ('Emily Dickenson'), ('Fyodor Dostoevsky'), ('William Shakespeare'), ('Lau Tzu');
SELECT * FROM authors;

INSERT INTO books(title)
VALUES ('C Sharp'), ('Java'), ('Python'), ('PHP'), ('Ruby');
SELECT * FROM books;

UPDATE books_schema.books SET title = 'C#' WHERE (id = '1');
SELECT * FROM books;

UPDATE books_schema.authors SET name = 'Bill Shakespeare' WHERE (id = '4');
SELECT * FROM authors;

INSERT INTO favorites
VALUES (1, 1), (1, 2);
SELECT * FROM favorites;

INSERT INTO favorites
VALUES (2, 1), (2, 2), (2,3);
SELECT * FROM favorites;

INSERT INTO favorites
VALUES (3, 1), (3, 2), (3,3), (3,4);
SELECT * FROM favorites;

INSERT INTO favorites
VALUES (4, 1), (4, 2), (4,3), (4,4), (4,5);
SELECT * FROM favorites;

SELECT author_id
FROM favorites
WHERE book_id = 3;

SELECT * FROM favorites; 
DELETE FROM favorites WHERE author_id = 2 and book_id = 3;
SELECT * FROM favorites; 

INSERT INTO favorites
VALUES (5, 2);
SELECT * FROM favorites;

SELECT author_id FROM favorites;
SELECT book_id FROM favorites WHERE author_id = 3;

SELECT author_id FROM favorites WHERE book_id = 5;


 

```
-- EXERCICIO  Aprofundamento SQL 

-- EXE1
-- A)
ALTER TABLE Actor DROP COLUMN salary;
-- Deleta a coluna salary

-- B)
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- ele modifica coluna gender para sex 

-- C)
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

-- altera coluna geender para genter podendo ter 255 caracteres

-- D)
ALTER TABLE Actor CHANGE sex gender VARCHAR(100);

-- EXE 2
-- A)
UPDATE Actor
SET name = "Edson Celulari",
	birth_date = "1958-03-20"
WHERE id = "003";    
SELECT * FROM Actor;
SET SQL_SAFE_UPDATES = 0;
-- B)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";  

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";  

-- C)
UPDATE Actor
SET name = "Cláudia Raia",
	salary = 200000,
	birth_date = "1966-12-23",
    gender = "female"
WHERE id = "005"; 

-- D)
UPDATE Actor
SET age = 50
WHERE name = 42;

-- Error Code: 1054. Unknown column 'age' in 'field list'
-- Ele da erro pois nao existe uma coluna chamada age


-- EXE3
-- A)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- B)

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;


-- EXE 4
SELECT * FROM Actor;
-- A)
SELECT MAX(salary) FROM Actor;

-- B)
SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- C)

SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- D)
SELECT SUM(salary) FROM Actor;

-- EXE5
-- A)
-- Ele conta quantos generos tem e depois agrupa quantidade de cada genero

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- B) 
SELECT id, name FROM Actor ORDER BY id, name DESC; 

-- C)
SELECT * FROM Actor ORDER BY salary ASC;

-- D)
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

-- E)

SELECT AVG(salary), gender FROM Actor GROUP BY gender;

-- EXE6
-- A)

ALTER TABLE Filme ADD playing_Limit_Date DATE;

-- B)

ALTER TABLE Filme CHANGE parametro_de_avaliação Rating  FLOAT;

-- C)
UPDATE Filme SET playing_limit_date = "2021-11-24" WHERE id - "001";

-- D)

DELETE FROM Filme WHERE id = "001";
UPDATE Filme SET title = "Coruja" WHERE id = "001";
-- Ele faz o update mas nao mostra o id deletado
SELECT * FROM Filme;
```
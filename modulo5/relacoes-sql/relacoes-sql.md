```
-- EXERCICIOS RELACOES EM SQL

-- EXE1

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filme(id)
);

-- A)
-- FOREIGN KEY é uma referencia da primary key da tabela que estamos em contato


-- B)
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Melhor filme que ja vi na vida",
    10,
	"002"
);

-- C

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Melhor filme que ja vi na vida",
    10,
	"022"
);

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416979-mauricio-goncalves`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filme` (`id`))
-- Não consegue adicionar ou atualizar porque a Foreign key é restrita a filmes que existem no banco de dados

-- D)
SELECT * FROM Filme;
ALTER TABLE Filme DROP COLUMN rating;

-- E) 

DELETE FROM Filme WHERE id = "002";

-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416979-mauricio-goncalves`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filme` (`id`))
-- Não consegue adicionar ou atualizar porque a Foreign key é restrita a filmes que existem no banco de dados

-- EXERCICIO 2

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filme(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- A) Esta criando uma tabela de elenco  usando a tabela de filme e de atores

-- B)
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"003",
    "004"
);
-- C)
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"013",
    "014"
);
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416979-mauricio-goncalves`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filme` (`id`))
-- Não da de criar relação por nao exister a chave estrangeira

-- D)

SELECT * FROM MovieCast;

-- exe3

SELECT * FROM Filme 
INNER JOIN Rating ON Filme.id = Rating.movie_id;

-- A)


-- B)

SELECT f.id as filme_id, r.rate as rating FROM Filme f
INNER JOIN Rating r ON f.id = r.movie_id;
```
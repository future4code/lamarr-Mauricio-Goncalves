``` 
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- exe1
-- a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
-- R: Varchar é usado para dizer o maximo de caracter que pode ser utilizado
-- DATE representa data em (YYYY-MM-DD)
-- NOT NULL indica se a coluna pode ou nao ser nula
-- primary key chave primaria 

-- b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.
-- SHOW DATABASES/TABLES traz os nomes de cada database/tabela existente na schema.

SHOW DATABASES ;
-- c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.
-- Ele mostra como a tabela foi estruturada
DESCRIBE Actor;

-- exe2
-- a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  " Pires",
  120000,
  "1963-09-23", 
  "female"
);
b)
-- > Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
-- Ele impede automaticamente criações repetidas por ser uma PRIMARY KEY ja existente
c)
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- Error Code: 1136. Column count doesn't match value count at row 1
-- nao foram passadas a data de nascimento nem o genero na coluna
d)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- Error Code: 1364. Field 'name' doesn't have a default value
-- Esta faltando o nome que na tabela pede
e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
-- a data de nascimento nao foi colocada como string
f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- exe3
SELECT * FROM Actor;
SELECT id, salary from Actor;
-- 3 a)
SELECT * from Actor WHERE gender = "female";
-- 3 b)
SELECT salary from Actor WHERE name = "Tony Ramos";
-- 3 c)
SELECT * from Actor WHERE gender = "null";
-- ele nao traz nenhum ator
-- 3 d)
 SELECT id, name, salary from Actor where salary < 500000;
-- 3 e)
SELECT id, nome from Actor WHERE id = "002";
 -- Error Code: 1054. Unknown column 'nome' in 'field list'
-- ele tem que ser chamado do mesmo jeito que foi criado, usando name em ingles nao nome

-- 4 
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
-- 4 a) Eles esta buscando nome que comece com A e com a letra J com salario maior que 300000

-- 4 b) 
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

-- 4 c) 
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%");

-- 4 d)
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name Like "%g%" OR name Like "%G%") AND salary BETWEEN 350000 AND 900000;


-- EXE 5

CREATE TABLE Filme (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Filme (id, title, synopsis, release_Date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/01/06",
2
);
INSERT INTO Filme (id, title, synopsis, release_Date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
10
);
INSERT INTO Filme (id, title, synopsis, release_Date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
8
);
INSERT INTO Filme (id, title, synopsis, release_Date, rating)
VALUES(
"004",
"Tropa de Elite",
"Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
"2007/10/05",
9
);

-- EXE 6
-- A)

SELECT id, title, rating from Filme WHERE id = 002;

-- B)

SELECT * from Filme WHERE title = "Tropa de Elite";

-- C)
SELECT id, title, synopsis from Filme WHERE rating > 7;


-- EXE 7 
-- A)
SELECT * FROM Filme
WHERE title LIKE "%vida%";

-- B) 
SELECT * FROM Filme WHERE title LIKE "%Tropa de Elite%" OR synopsis LIKE "%Nascimento%";

-- C)

SELECT * FROM Filme WHERE release_date < "2012-11-01";

-- D )

SELECT * FROM Filme WHERE release_date < "2022-11-01" AND (title LIKE "%fLOR%" OR synopsis LIKE "%Dois Maridos%") AND RATING > 7;


```
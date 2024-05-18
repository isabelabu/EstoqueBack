CREATE DATABASE estoque;

USE estoque;

CREATE TABLE IF NOT EXISTS produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(60) NOT NULL,
  descricao VARCHAR(150),
  preco DECIMAL(10,2) NOT NULL,
  quantidade int not null,
  imagem BLOB
);

INSERT INTO produtos(nome, descricao, preco, quantidade) VALUES ("Colgate", "Pasta de dente", 5.50, 35);
INSERT INTO produtos(nome, descricao, preco, quantidade) VALUES ("Shampoo Pantene", "Para cabelos ondulados", 15.50, 40);

CREATE TABLE IF NOT EXISTS usuarios (
  email varchar(60) PRIMARY KEY,
  nome VARCHAR(60) NOT NULL,
  senha varchar(30) NOT NULL
);

INSERT INTO usuarios(nome, email, senha) VALUES("Isabela", "isabela@gmail.com", "macaco");
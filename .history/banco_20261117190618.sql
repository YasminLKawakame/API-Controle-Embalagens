CREATE DATABASE controle_embalagens;

USE controle_embalagens;

CREATE TABLE embalagem (
    id_embalagem INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    material VARCHAR(50) NOT NULL,
    capacidade VARCHAR(50) NOT NULL
);

CREATE TABLE maquina (
    id_maquina INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    patrimonio VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL
);


CREATE TABLE analista (
    id_analista INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    registro VARCHAR(100) UNIQUE NOT NULL,
    especialidade VARCHAR(100) NOT NULL
);
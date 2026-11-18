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


CREATE TABLE operador (
    id_operador INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    matricula VARCHAR(100) UNIQUE NOT NULL,
    turno VARCHAR(100) NOT NULL
);
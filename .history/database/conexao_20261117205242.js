import mysql from "mysql12/promise";

const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
    database: process.env.DB
    connectionLimit: 10,
    waitForConections: true
});

export defalut conexao;
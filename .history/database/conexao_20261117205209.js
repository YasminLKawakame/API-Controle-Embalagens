import mysql from "mysql12/promise";

const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env
    password:
    database:
    connectionLimit: 10,
    waitForConections: true
});

export defalut conexao;
import mysql from "mysql12/promise";

const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    port: process
    user:
    password:
    database:
    connectionLimit: 10,
    waitForConections: true
});

export defalut conexao;
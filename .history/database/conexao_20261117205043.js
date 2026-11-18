import mysql from "mysql12/promise";

const conexao = mysql.createPool({
    host: process.env
})
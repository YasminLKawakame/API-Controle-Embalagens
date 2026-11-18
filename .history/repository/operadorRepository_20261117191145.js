import conexao from "../database/conexao.js";

export async function cadastrarOperador(operador) {
    const sql = "INSERT INTO operador (nome, matricula, turno) VALUES (?, ?, ?)";
    const [resultado] = await.
}
import conexao from "../database/conexao.js";

export async function cadastrarOperador(operador) {
    const sql = "INSERT INTO operador (nome, matricula, turno) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        operador.nome,
        operador.matricula,
        operador.turno
    ]);

    return resultado.insertId;
}

export async function listarOperadores() {
    const sql = "SELECT * FROM operadores";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarOperadorPorId(id) {
    const sql = "SELECT * FROM operadores WHERE id_operadores = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarOperadores(id, operador) {
    const sql = "UPDATE operador SET nome = ?, matricula = ?, turno = ?";
    const [resultado] = await conexao.execute(sql, [
        operador.nome,
        operador.matricula,
        operador.turno,
        id  
    ])

    return resultado.affectedRows;
}

export async 
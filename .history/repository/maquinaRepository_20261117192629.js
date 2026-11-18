import conexao from "../database/conexao.js";

export async function cadastrarMaquina(ma) {
    const sql = "INSERT INTO ma (nome, matricula, turno) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        ma.nome,
        ma.matricula,
        ma.turno
    ]);

    return resultado.insertId;
}

export async function listarmaes() {
    const sql = "SELECT * FROM maes";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarmaPorId(id) {
    const sql = "SELECT * FROM maes WHERE id_maes = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarmaes(id, ma) {
    const sql = "UPDATE ma SET nome = ?, matricula = ?, turno = ?";
    const [resultado] = await conexao.execute(sql, [
        ma.nome,
        ma.matricula,
        ma.turno,
        id  
    ])

    return resultado.affectedRows;
}

export async function excluirma(id) {
    const sql = "DELETE FROM ma WHERE id_ma = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}
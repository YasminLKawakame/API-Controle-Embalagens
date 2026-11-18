import conexao from "../database/conexao.js";

export async function cadastrarMaquina(maquina) {
    const sql = "INSERT INTO maquina (nome, patrimonio, status) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        maquina.nome,
        maquina.patrimonio,
        maquina.status
    ]);

    return resultado.insertId;
}

export async function listarmaquinaes() {
    const sql = "SELECT * FROM maquina";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarmaquinaPorId(id) {
    const sql = "SELECT * FROM maquinaes WHERE id_maquinaes = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarmaquinaes(id, maquina) {
    const sql = "UPDATE maquina SET nome = ?, patrimonio = ?, status = ?";
    const [resultado] = await conexao.execute(sql, [
        maquina.nome,
        maquina.patrimonio,
        maquina.status,
        id  
    ])

    return resultado.affectedRows;
}

export async function excluirmaquina(id) {
    const sql = "DELETE FROM maquina WHERE id_maquina = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}
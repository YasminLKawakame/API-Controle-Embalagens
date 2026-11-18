import conexao from "../database/conexao.js";

export async function cadastrarMaquina(maquina) {
    const sql = "INSERT INTO maquina (nome, patrimonio, turno) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        maquina.nome,
        maquina.patrimonio,
        maquina.turno
    ]);

    return resultado.insertId;
}

export async function listarmaquinaes() {
    const sql = "SELECT * FROM maquinaes";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarmaquinaPorId(id) {
    const sql = "SELECT * FROM maquinaes WHERE id_maquinaes = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarmaquinaes(id, maquina) {
    const sql = "UPDATE maquina SET nome = ?, patrimonio = ?, turno = ?";
    const [resultado] = await conexao.execute(sql, [
        maquina.nome,
        maquina.patrimonio,
        maquina.turno,
        id  
    ])

    return resultado.affectedRows;
}

export async function excluirmaquina(id) {
    const sql = "DELETE FROM maquina WHERE id_maquina = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}
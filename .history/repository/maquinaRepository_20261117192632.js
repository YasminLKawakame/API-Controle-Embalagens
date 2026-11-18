import conexao from "../database/conexao.js";

export async function cadastrarMaquina(maqui) {
    const sql = "INSERT INTO maqui (nome, matricula, turno) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        maqui.nome,
        maqui.matricula,
        maqui.turno
    ]);

    return resultado.insertId;
}

export async function listarmaquies() {
    const sql = "SELECT * FROM maquies";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarmaquiPorId(id) {
    const sql = "SELECT * FROM maquies WHERE id_maquies = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarmaquies(id, maqui) {
    const sql = "UPDATE maqui SET nome = ?, matricula = ?, turno = ?";
    const [resultado] = await conexao.execute(sql, [
        maqui.nome,
        maqui.matricula,
        maqui.turno,
        id  
    ])

    return resultado.affectedRows;
}

export async function excluirmaqui(id) {
    const sql = "DELETE FROM maqui WHERE id_maqui = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}
import conexao from "../database/conexao.js";

export async function cadastrarEmbalagem(embala) {
    const sql = "INSERT INTO embala (nome, patrimonio, status) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        embala.nome,
        embala.patrimonio,
        embala.status
    ]);

    return resultado.insertId;
}

export async function listarembalas() {
    const sql = "SELECT * FROM embala";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarembalaPorId(id) {
    const sql = "SELECT * FROM embala WHERE id_embala = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarembala(id, embala) {
    const sql = "UPDATE embala SET nome = ?, patrimonio = ?, status = ?";
    const [resultado] = await conexao.execute(sql, [
        embala.nome,
        embala.patrimonio,
        embala.status,
        id  
    ])

    return resultado.affectedRows;
}

export async function excluirembala(id) {
    const sql = "DELETE FROM embala WHERE id_embala = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}
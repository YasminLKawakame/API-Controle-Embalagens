import conexao from "../database/conexao.js";

export async function cadastrarEmbalagem(embalagem) {
    const sql = "INSERT INTO embalagem (descricao, material, capacidade) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        embalagem.descricao,
        embalagem.material,
        embalagem.capacidade
    ]);

    return resultado.insertId;
}

export async function listarembalagems() {
    const sql = "SELECT * FROM embalagem";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarembalagemPorId(id) {
    const sql = "SELECT * FROM embalagem WHERE id_embalagem = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarembalagem(id, embalagem) {
    const sql = "UPDATE embalagem SET descricao = ?, material = ?, capacidade = ?";
    const [resultado] = await conexao.execute(sql, [
        embalagem.descricao,
        embalagem.material,
        embalagem.capacidade,
        id  
    ])

    return resultado.affectedRows;
}

export async function excluirembalagem(id) {
    const sql = "DELETE FROM embalagem WHERE id_embalagem = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}
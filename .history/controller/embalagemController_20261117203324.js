import {
    cadastrarEmbalagem as cadastrar,
    atualizarEmbalagem as atualizar,
    listarEmbalagens as listar,
    buscarEmbalagemPorId as buscar,
    excluirEmbalagem as excluir
} from "../repository/embalagemRepository.js";

export async function cadastrarEmbalagem(req, res) {
    try {
        const embalagem = req.body;
        const id = await cadastrar(embalagem);
        res.status(201).json({ id });
    } catch (mensagem) {
        res.status(500).json({ mensagem: "Erro em cadastrar embalagem." });
    }
}

export async function atualizarEmbalagem(req, res) {
    try {
        const id = req.params.id;
        const dados = req.body;
        const embalagem = await atualizar(id, dados);
        if (!embalagem) {
            return res.status(404).json({ mensagem: "Erro ao atualizar o embalagem." })
        }
        res.status(200).json(embalagem);
    } catch (mensagem) {
        res.status(500).json({ mensagem: "Erro ao cadastrar embalagem." });
    }
}

export async function listarEmbalagens(req, res) {
    try {
        const embalagem = await listar();
        res.status(200).json(embalagem);
    } catch (mensagem) {
        res.status(500).json({ mensagem: "Erro ao listar embalagemes." });
    }
}

export async function buscarembalagemPorId(req, res) {
    try {
        const id = req.params.id;
        const embalagem = await buscar(id);
        if (!embalagem) {
            return res.status(404).json({ mensagem: "embalagem não encontrado." });
        }
        res.status(200).json(embalagem);
    } catch (mensagem) {
        res.status(500).json({ mensgaem: "Erro ao buscar o embalagem" });
    }
}

export async function excluirembalagem(req, res) {
    try {
        const id = req.params.id;
        const embalagem = await excluir(id);
        if (!embalagem) {
            return res.status(404).json({ mensagem: "embalagem não encontrado." });
        }
        res.status(200).json({ mensagem: "embalagem excluído com sucesso." });
    } catch (mensagem) {
        res.status(500).json({ mensagem: "Erro ao excluir embalagem." })
    }
}
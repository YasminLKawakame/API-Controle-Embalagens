import {
    cadastrarMaquina as cadastrar,
    atualizarMaquina as atualizar,
    listarMaquinas as listar,
    buscarMaquinaPorId as buscar,
    excluirMaquina as excluir
} from "../repository/maquinaRepository.js";

export async function cadastrarMaquina(req, res) {
    try {
        const maquina = req.body;
        const id = await cadastrar(maquina);
        res.status(201).json({ id });
    } catch (mensagem) {
        res.status(500).json({ mensagem: "Erro em cadastrar maquina." });
    }
}

export async function atualizarMaquina(req, res) {
    try {
        const id = req.params.id;
        const dados = req.body;
        const maquina = await atualizar(id, dados);
        if (!maquina) {
            return res.status(404).json({ mensagem: "Erro ao atualizar o maquina." })
        }
        res.status(200).json(maquina);
    } catch (mensagem) {
        res.status(500).json({ mensagem: "Erro ao cadastrar maquina." });
    }
}

export async function listarMaquinas(req, res) {
    try {
        const maquina = await listar();
        res.status(200).json(maquina);
    } catch (mensagem) {
        res.status(500).json({ mensagem: "Erro ao listar maquinas." });
    }
}

export async function buscarMaquinaPorId(req, res) {
    try {
        const id = req.params.id;
        const maquina = await buscar(id);
        if (!maquina) {
            return res.status(404).json({ mensagem: "maquina não encontrado." });
        }
        res.status(200).json(maquina);
    } catch (mensagem) {
        res.status(500).json({ mensgaem: "Erro ao buscar o maquina" });
    }
}

export async function excluirmaquina(req, res) {
    try {
        const id = req.params.id;
        const maquina = await excluir(id);
        if (!maquina) {
            return res.status(404).json({ mensagem: "maquina não encontrado." });
        }
        res.status(200).json({ mensagem: "maquina excluído com sucesso." });
    } catch (mensagem) {
        res.status(500).json({ mensagem: "Erro ao excluir maquina." })
    }
}
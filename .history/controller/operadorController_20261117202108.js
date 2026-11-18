import {
    cadastrarOperador as cadastrar,
    atualizarOperador as atualizar,
    listarOperadores as listar,
    buscarOperadorPorId as buscar,
    excluirOperador as excluir
} from "../repository/operadorRepository.js";

export async function cadastrarOperador(req, res) {
    try {
        const operador = req.body;
        const id = await cadastrar(operador);
        res.status(201).json({ id });
    } catch (mensagem) {
        res.status(500).json({ mensagem: "Erro em cadastrar  operador." });
    }
}

export async function atualizarOperador(req, res) {
    try {
        const id = req.params.id;
        const dados = req.body;
        const operador = await atualizar(id, dados);
        if (!operador) {
            return res.status(404).json({ mensagem: "Erro ao atualizar o operador." })
        }
        res.status(200).json(operador);
    } catch (mensagem) {
        res.status(500).json({ mensagem: "Erro ao cadastrar operador." });
    }
}

export async function listarOperadores(req, res) {
    try {
        const operador = await listar();
        res.status(200).json(operador);
    } catch (mensagem) {
        res.status(500).json({ mensagem: "Erro ao listar operadores." });
    }
}

export async function buscarOperadorPorId(req, res) {
    try {
        const id = req.params.id;
        const operador = await buscar(id);
        if(!operador) {
            return res.status(404).json({ mensagem: })
        }
    }
}
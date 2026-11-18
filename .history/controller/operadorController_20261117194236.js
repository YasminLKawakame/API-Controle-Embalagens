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
    } catch (error) {
        
    }
}
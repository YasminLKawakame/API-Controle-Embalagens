export class Embalagem {
    constructor(id_embalagem, descricao, material, capacidade) {
        this.id_maquina = id_maquina,
        this.nome = nome,
        this.patrimonio = patrimonio,
        this.status = status
    }

    validarNome(nome) {
        if (!nome || nome.trim().length < 3) {
            throw new Error("O nome deve possuir pelo menos 3 caracteres.");
        }
        return true;
    }

    validarPatrimonio(patrimonio) {
        if (!patrimonio || patrimonio.trim() === "") {
            throw new Error("A patrimonio não pode ficar vazia.");
        }
        return true;
    }

    validarStatus(status) {
        if (!status || status.trim() === "") {
            throw new Error("O status não pode ficar vazio.");
        }
        return true;
    }
}

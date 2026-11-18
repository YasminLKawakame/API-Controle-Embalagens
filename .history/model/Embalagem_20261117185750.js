export class Embalagem {
    constructor(id_embalagem, descricao, material, capacidade) {
        this.id_embalagem = id_embalagem,
        this.descricao = descricao,
        this.patrimonio = patrimonio,
        this.status = status
    }

    validarDescricao(descricao) {
        if (!descricao || descricao.trim().length < 3) {
            throw new Error("O descricao deve possuir pelo menos 3 caracteres.");
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

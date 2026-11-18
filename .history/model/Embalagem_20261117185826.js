export class Embalagem {
    constructor(id_embalagem, descricao, material, capacidade) {
        this.id_embalagem = id_embalagem,
        this.descricao = descricao,
        this.material = material,
        this.status = status
    }

    validarDescricao(descricao) {
        if (!descricao || descricao.trim().length < 3) {
            throw new Error("A descricao deve possuir pelo menos 3 caracteres.");
        }
        return true;
    }

    validarMaterial(material) {
        if (!material || material.trim() === "") {
            throw new Error("O material não pode ficar vazia.");
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

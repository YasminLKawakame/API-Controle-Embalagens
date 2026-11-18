export class Embalagem {
    constructor(id_embalagem, descricao, material, capacidade) {
        this.id_embalagem = id_embalagem,
        this.descricao = descricao,
        this.material = material,
        this.capacidade = capacidade
    }

    validarDescricao(descricao) {
        if (!descricao || descricao.trim().length < 3) {
            throw new Error("A descricao deve possuir pelo menos 3 caracteres.");
        }
        return true;
    }

    validarMaterial(material) {
        if (!material || material.trim() === "") {
            throw new Error("O material não pode ficar vazio.");
        }
        return true;
    }

    validarCapacidade(capacidade) {
        if (capacidade ) {
            throw new Error("O capacidade não pode ficar vazio.");
        }
        return true;
    }
}

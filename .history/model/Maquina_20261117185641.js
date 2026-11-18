export class Maquina {
    constructor(id_maquina, nome, patrimonio, status) {
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

    validarMatricula(matricula) {
        if (!matricula || matricula.trim() === "") {
            throw new Error("A matricula não pode ficar vazia.");
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

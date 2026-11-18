export class Operador {
    constructor(id_operador, nome, matricula, turno) {
        this.id_operador = id_operador,
        this.nome = nome,
        this.matricula = matricula,
        this.turno = turno
    }
}

    validarNome(nome) {
        if (!nome || nome.trim().length < 3) {
            throw new Error("O nome deve possuir pelo menos 3 caracteres.");
        }
        return true;
    }
import express from "express";
import {
    cadastrarMaquina,
    listarMaquinaes,
    atualizarMaquina,
    buscarMaquinaPorId,
    excluirMaquina
} from "../controller/maquinaController.js";

const router = express.Router();

router.post("/", cadastrarOperador);
router.get("/", listarOperadores);
router.get("/:id", buscarOperadorPorId);
router.patch("/:id", atualizarOperador);
router.delete("/:id", excluirOperador);
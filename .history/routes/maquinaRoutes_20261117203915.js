import express from "express";
import {
    cadastrarOperador,
    listarOperadores,
    atualizarOperador,
    buscarOperadorPorId,
    excluirOperador
} from "../controller/maquinaController.js";

const router = express.Router();

router.post("/", cadastrarOperador);
router.get("/", listarOperadores);
router.get("/:id", buscarOperadorPorId);
router.patch("/:id", atualizarOperador);
router.delete("/:id", excluirOperador);
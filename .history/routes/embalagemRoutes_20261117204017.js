import express from "express";
import {
    cadastrarEmbalagem,
    listarEmbalagens,
    atualizarEmbalagem,
    buscarEmbalagemPorId,
    excluirEmbalagem
} from "../controller/mbalagemController.js";

const router = express.Router();

router.post("/", cadastrarEmbalagem);
router.get("/", listarEmbalagens);
router.get("/:id", buscarEmbalagemPorId);
router.patch("/:id", atualizarEmbalagem);
router.delete("/:id", excluirEmbalagem);

export default router;
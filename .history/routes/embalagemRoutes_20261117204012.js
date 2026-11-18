import express from "express";
import {
    cadastrarEmbalagem,
    listarEmbalagems,
    atualizarEmbalagem,
    buscarEmbalagemPorId,
    excluirEmbalagem
} from "../controller/mbalagemController.js";

const router = express.Router();

router.post("/", cadastrarEmbalagem);
router.get("/", listarEmbalagems);
router.get("/:id", buscarEmbalagemPorId);
router.patch("/:id", atualizarEmbalagem);
router.delete("/:id", excluirEmbalagem);

export default router;
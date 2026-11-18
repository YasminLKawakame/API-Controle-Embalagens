import express from "express";
import conexao from "./database/conexao.js";
import operadorRoutes from "./routes/operadorRoutes.js";
import maquinaRoutes from "./routes/maquinaRoutes.js";
import embalagemRoutes from "./routes/embalagemRoutes.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/operador", operadorRoutes);
app.use("/maquina", maquinaRoutes);
app.use("embalagem", embalagemRoutes);

async function iniciarServidor() {
    try {
        const conexaoTest = await conexao.getConnection();

        app.listen(PORT, () => {
            console.log("Servidor rodando em http://localhost:{PORT}");
            
        })
    }
}
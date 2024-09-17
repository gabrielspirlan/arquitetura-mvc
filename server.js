import express from 'express'
const app = express()
const port = 9090
import path from 'path';
import { fileURLToPath } from 'url';
;
// Recria o __dirname no formato ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
// Configura o middleware para servir arquivos estáticos
app.use(express.static(__dirname));

// ROUTES
import clientesRouter from './routes/clientes.js'
app.use('/clientes', clientesRouter)


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
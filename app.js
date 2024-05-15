import express from "express"
import 'dotenv/config'
import heroisRouter from "./routes/herois.js"
import sequelize from "./database.js"
const app = express()

app.use(express.json())
app.use(heroisRouter)
try {
    await sequelize.sync({});
    console.log('Conectado com Sucesso!')
}catch(error) {
    console.log("Erro ao conectar",  error)
}
app.listen( 3000, () => console.log('servidor rodando'))
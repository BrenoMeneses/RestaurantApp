import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json()).use(express.urlencoded({ extended: true }))

app.listen(8080, () => {
    console.log("rodando em http://localhost:8080")
})
import express from "express"
import LivroController from "../controllers/livroController.js"

const routes = express.Router()

routes.get("/livros", LivroController.listaLivros)
routes.get("/livros/busca", LivroController.listarLivrosPorEditora)
routes.get("/livro/:id", LivroController.listarLivro)
routes.post("/livros", LivroController.cadastraLivro)
routes.put("/livro/:id", LivroController.atualizarLivro)
routes.delete("/livro/:id", LivroController.deletaLivro)

export default routes
import mongoose from "mongoose";
import { autorSchema } from "./Autor.js"

const livroSchema = mongoose.Schema({
    titulo: { type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: autorSchema
}, { versionKey: false })

const livro = mongoose.model("livros", livroSchema)

export default livro
import mongoose from "mongoose";

const livroSchema = mongoose.Schema({
    titulo: { type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number}
}, { versionKey: false })

const livro = mongoose.model("livros", livroSchema)

export default livro
import mongoose from "mongoose";

const livroSchema = mongoose.Schema({
  titulo: { type: String, required: [true, "O título do livro é obrigatório"] },
  editora: { type: String, required: [true, "O nome da Editora é obrigatório"] },
  preco: { type: Number },
  paginas: { type: Number, min: [10, "O nro de paginas deve estar entre 10 e 5.000"], max: [5000, "O nro de paginas deve estar entre 10 e 5.000"] },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autor",
    required: [true, "O(A) autor(a) é obrigatório."]
  }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;
import mongoose from "mongoose";

const livroSchema = mongoose.Schema({
  titulo: { type: String, required: [true, "O título do livro é obrigatório"] },
  editora: { type: String, required: [true, "O nome da Editora é obrigatório"] },
  preco: { type: Number },
  paginas: { type: Number },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autor",
    required: [true, "O(A) autor(a) é obrigatório."]
  }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;
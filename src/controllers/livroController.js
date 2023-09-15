import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

  static async listaLivros (req, res) {
    try {

      const result = await livro.find({});
      res.status(200).json(result);
    
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: `${error.message} - falha ao buscar livros`});
    }
  }

  static async listarLivro (req, res) {
    try {

      const { id } = req.params;
      const result = await livro.findById(id);
      res.status(200).json(result);
    
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: `${error.message} - falha ao buscar livro`});
    }
  }

  static async cadastraLivro (req, res) {

    const novoLivro = req.body;

    try {

      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};

      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "criado com sucesso", livro: livroCriado});
            
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar livro`});
    }
  }

  static async atualizarLivro (req, res) {
    try {

      const { id } = req.params;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ msg: "Livro atualizado"});
            
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao atualizar livro`});
    }
  }

  static async deletaLivro (req, res) {
    try {

      const { id } = req.params;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ msg: "Livro deletado"});
            
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao deletar livro`});
    }
  }

  static async listarLivrosPorEditora (req, res) {

    const editora = req.query.editora;

    try {
            
      const livrosEditora = await livro.find({editora: editora});            
      res.status(200).json(livrosEditora);

    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao buscar livros`});
    }
  }
}

export default LivroController;
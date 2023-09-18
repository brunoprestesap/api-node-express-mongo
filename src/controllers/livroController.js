import livro from "../models/Livro.js";
import autor from "../models/Autor.js";

class LivroController {

  static async listaLivros (req, res, next) {
    try {

      const result = await livro.find({});
      res.status(200).json(result);
    
    } catch (error) {
      next(error);
    }
  }

  static async listarLivro (req, res, next) {
    try {

      const { id } = req.params;
      const result = await livro.findById(id);
      res.status(200).json(result);
    
    } catch (error) {
      next(error);
    }
  }

  static async cadastraLivro (req, res, next) {

    const novoLivro = req.body;

    try {

      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};

      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "criado com sucesso", livro: livroCriado});
            
    } catch (error) {
      next(error);
    }
  }

  static async atualizarLivro (req, res, next) {
    try {

      const { id } = req.params;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ msg: "Livro atualizado"});
            
    } catch (error) {
      next(error);
    }
  }

  static async deletaLivro (req, res, next) {
    try {

      const { id } = req.params;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ msg: "Livro deletado"});
            
    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorEditora (req, res, next) {

    const editora = req.query.editora;

    try {
            
      const livrosEditora = await livro.find({editora: editora});            
      res.status(200).json(livrosEditora);

    } catch (error) {
      next(error);
    }
  }
}

export default LivroController;
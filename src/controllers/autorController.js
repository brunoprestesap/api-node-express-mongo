import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores (req, res) {
    try {

      const result = await autor.find({});
      res.status(200).json(result);
    
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: `${error.message} - falha ao buscar autores`});
    }
  }

  static async listarAutor (req, res) {
    try {

      const { id } = req.params;
      const result = await autor.findById(id);
      res.status(200).json(result);
    
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: `${error.message} - falha ao buscar autor`});
    }
  }

  static async cadastraAutor (req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: novoAutor});
            
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar autor`});
    }
  }

  static async atualizarAutor (req, res) {
    try {

      const { id } = req.params;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ msg: "Autor atualizado"});
            
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao atualizar autor`});
    }
  }

  static async deletarAutor (req, res) {
    try {

      const { id } = req.params;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ msg: "Autor deletado"});
            
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao deletar autor`});
    }
  }
}

export default AutorController;
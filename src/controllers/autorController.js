import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autor } from "../models/index.js";

class AutorController {
  static async listarAutores(req, res, next) {
    try {
      const result = await autor.find({});
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async listarAutor(req, res, next) {
    try {
      const { id } = req.params;
      const result = await autor.findById(id);

      if (result) {
        res.status(200).json(result);
      } else {
        next(new NaoEncontrado("Id do autor não localizado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async cadastraAutor(req, res, next) {
    try {
      
      let novoAutor = new autor(req.body);

      const result = await novoAutor.save();
      res.status(201).json({ message: "criado com sucesso", autor: result });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const { id } = req.params;
      const result = await autor.findByIdAndUpdate(id, req.body);

      if (result) {
        res.status(200).json({ msg: "Autor atualizado" });
      } else {
        next(new NaoEncontrado("Id do autor não encontrado"));
      }

    } catch (error) {
      next(error);
    }
  }

  static async deletarAutor(req, res, next) {
    try {
      const { id } = req.params;
      const result = await autor.findByIdAndDelete(id);
      if (result) {
        res.status(200).json({ msg: "Autor deletado" });
      } else {
        next(new NaoEncontrado("Id do autor não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;

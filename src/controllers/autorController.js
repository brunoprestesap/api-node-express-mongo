import autor from "../models/Autor.js";

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
        res.status(404).json({ msg: "Autor não encontrado" });
      }

    } catch (error) {
      next(error);
    }
  }

  static async cadastraAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: novoAutor });

    } catch (error) {
      next(error);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {

      const { id } = req.params;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ msg: "Autor atualizado" });

    } catch (error) {
      next(error);
    }
  }

  static async deletarAutor(req, res, next) {
    try {

      const { id } = req.params;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ msg: "Autor deletado" });

    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;
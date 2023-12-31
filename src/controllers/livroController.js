import { autor, livro } from "../models/index.js";

class LivroController {
  static async listaLivros(req, res, next) {
    try {
      const result = await livro.find({});
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async listarLivro(req, res, next) {
    try {
      const { id } = req.params;
      const result = await livro.findById(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async cadastraLivro(req, res, next) {
    const novoLivro = new livro(req.body);

    try {
      const result = await novoLivro.save();
      res.status(201).json({ message: "criado com sucesso", livro: result });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const { id } = req.params;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ msg: "Livro atualizado" });
    } catch (error) {
      next(error);
    }
  }

  static async deletaLivro(req, res, next) {
    try {
      const { id } = req.params;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ msg: "Livro deletado" });
    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorFiltro(req, res, next) {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        const livrosResultado = await livro.find(busca).populate("autor");
        res.status(200).json(livrosResultado);
      } else {
        res.status(200).send([]);
      }

    } catch (error) {
      next(error);
    }
  }
}

async function processaBusca(parametros) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;

  let busca = {};

  if (editora) busca.editora = { $regex: editora, $options: "i" };
  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if (minPaginas || maxPaginas) busca.paginas = {};

  if (minPaginas) busca.paginas.$gte = minPaginas;
  if (maxPaginas) busca.paginas.$lte = maxPaginas;

  if (nomeAutor) {
    const findAutor = await autor.findOne({ nome: nomeAutor });

    if (findAutor !== null) {
      busca.autor = findAutor._id;
    } else {
      busca = null;
    }

  }

  return busca;
}

export default LivroController;

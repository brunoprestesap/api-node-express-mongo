import livro from "../models/Livro.js";

class LivroController {

    static async listaLivros (req, res) {
        try {

            const result = await livro.find({})
            res.status(200).json(result)
    
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: `${error.message} - falha ao buscar livros`})
        }
    }

    static async listarLivro (req, res) {
        try {

            const { id } = req.params
            const result = await livro.findById(id)
            res.status(200).json(result)
    
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: `${error.message} - falha ao buscar livro`})
        }
    }

    static async cadastraLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro})
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro`})
        }
    }

    static async atualizarLivro (req, res) {
        try {

            const { id } = req.params;
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({ msg: "Livro atualizado"})
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar livro`})
        }
    }

    static async deletaLivro (req, res) {
        try {

            const { id } = req.params;
            await livro.findByIdAndDelete(id)
            res.status(200).json({ msg: "Livro deletado"})
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar livro`})
        }
    }
}

export default LivroController
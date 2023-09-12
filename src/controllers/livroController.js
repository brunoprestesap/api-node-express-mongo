import livro from "../models/Livro.js";

class LivroController {

    static async listaLivros (req, res) {
        try {

            const result = await livro.find({})
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
}

export default LivroController
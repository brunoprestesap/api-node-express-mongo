import express from "express"

const app = express()
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "O senhor do Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

function buscaLivros(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
})

app.get("/livros/:id", (req, res) => {
    const { id } = req.params
    const index = buscaLivros(id)
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res) => {
    livros.push(req.body)
    console.log(livros)
    res.status(201).send("Livro cadastrado com sucesso")
})

app.put("/livros/:id", (req, res) => {
    const { id } = req.params
    const index = buscaLivros(id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

app.delete("/livros/:id")

export default app
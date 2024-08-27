const express = require('express')
//const corretora = require('./controller/corretora')

const produto_controller = require("./controllers/produto.js")
const setor_controller = require("./controllers/setor.js")
const funcionario_controller = require("./controllers/funcionario.js")
const fornecedores_controller = require("./controllers/fornecedores.js")
const carrinho_controller = require("./controllers/carrinho.js")
const venda_controller = require("./controllers/venda.js")
const statusdepagamento_controller = require("./controllers/statusdepagamento.js")

const app = express();
const port = 3333;

app.use(express.json())

app.get("/produto/:id", (req, res) => {
    const content = produto_controller.index(req.params.id)
    res.json(content)
})

app.get("/produto", (req, res) => {
    const content = produto_controller.show()
    res.json(content)
})

app.post("/produto", (req, res) => {
    const code = produto_controller.store(req.body)
    res.status(code).json()
})

app.put("/produto/:id", (req, res) => {
    const code = produto_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/produto/:id", (req, res) => {
    const code = produto_controller.destroy(req.params.id);
    res.status(code).json()
})

// entidade 2

app.get("/pedido/:id", (req, res) => {
    const content = pedido_controller.index(req.params.id)
    res.json(content)
})

app.get("/pedido", (req, res) => {
    const content = pedido_controller.show()
    res.json(content)
})

app.post("/pedido", (req, res) => {
    const code = pedido_controller.store(req.body)
    res.status(code).json()
})

app.put("/pedido/:id", (req, res) => {
    const code = pedido_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/pedido/:id", (req, res) => {
    const code = pedido_controller.destroy(req.params.id);
    res.status(code).json()
})

// entidade 4

app.get("/setor/:id", (req, res) => {
    const content = setor_controller.index(req.params.id)
    res.json(content)
})

app.get("/setor/", (req, res) => {
    const content = setor_controller.show()
    res.json(content)
})

app.post("/setor", (req, res) => {
    const code = setor_controller.store(req.body)
    res.status(code).json()
})

app.put("/setor/:id", (req, res) => {
    const code = setor_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/setor/:id", (req, res) => {
    const code = setor_controller.destroy(req.params.id);
    res.status(code).json()
})

// entidade 5

app.get("/funcionario/:id", (req, res) => {
    const content = funcionario_controller.index(req.params.id)
    res.json(content)
})

app.get("/funcionario", (req, res) => {
    const content = funcionario_controller.show()
    res.json(content)
})

app.post("/funcionario", (req, res) => {
    const code = funcionario_controller.store(req.body)
    res.status(code).json()
})

app.put("/funcionario/:id", (req, res) => {
    const code = funcionario_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/funcionario/:id", (req, res) => {
    const code = funcionario_controller.destroy(req.params.id);
    res.status(code).json()
})

// entidade 6

app.get("/fornecedores/:id", (req, res) => {
    const content = fornecedores_controller.index(req.params.id)
    res.json(content)
})

app.get("/fornecedores", (req, res) => {
    const content = fornecedores_controller.show()
    res.json(content)
})

app.post("/fornecedores", (req, res) => {
    const code = fornecedores_controller.store(req.body)
    res.status(code).json()
})

app.put("/fornecedores/:id", (req, res) => {
    const code = fornecedores_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/fornecedores/:id", (req, res) => {
    const code = fornecedores_controller.destroy(req.params.id);
    res.status(code).json()
})

//entidade 7

app.get("/carrinho/:id", (req, res) => {
    const content = carrinho_controller.index(req.params.id)
    res.json(content)
})

app.get("/carrinho", (req, res) => {
    const content = carrinho_controller.show()
    res.json(content)
})

app.post("/carrinho", (req, res) => {
    const code = carrinho_controller.store(req.body)
    res.status(code).json()
})

app.put("/carrinho/:id", (req, res) => {
    const code = carrinho_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/carrinho/:id", (req, res) => {
    const code = carrinho_controller.destroy(req.params.id);
    res.status(code).json()
})


// entidade 8

app.get("/venda/:id", (req, res) => {
    const content = venda_controller.index(req.params.id)
    res.json(content)
})

app.get("/venda", (req, res) => {
    const content = venda_controller.show()
    res.json(content)
})

app.post("/venda", (req, res) => {
    const code = venda_controller.store(req.body)
    res.status(code).json()
})

app.put("/venda/:id", (req, res) => {
    const code = venda_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/venda/:id", (req, res) => {
    const code = venda_controller.destroy(req.params.id);
    res.status(code).json()
})


//entidade 9

app.get("/statusdepagamento/:id", (req, res) => {
    const content = statusdepagamento_controller.index(req.params.id)
    res.json(content)
})

app.get("/statusdepagamento", (req, res) => {
    const content = statusdepagamento_controller.show()
    res.json(content)
})

app.post("/statusdepagamento", (req, res) => {
    const code = statusdepagamento_controller.store(req.body)
    res.status(code).json()
})

app.put("/statusdepagamento/:id", (req, res) => {
    const code = statusdepagamento_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/statusdepagamento/:id", (req, res) => {
    const code = statusdepagamento_controller.destroy(req.params.id);
    res.status(code).json()
})























app.listen(port, () => {
    console.log("isso executa quando o servidor inicia")
})
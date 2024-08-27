const express = require('express')
//const corretora = require('./controller/corretora')

const produto_controller = require("./controllers/produto.js")
const pedido_controller = require("./src/controllers/pedido.js")
const grupoAlimento_controller = require("./src/controllers/grupoAlimento.js")

const setorMercado_controller = require("./src/controllers/setorMercado.js")
const funcionario_controller = require("./src/controllers/funcionario.js")
const fornecedores_controller = require("./src/controllers/fornecedores.js")

const niveisAcesso_controller = require("./src/controllers/niveisAcesso.js")
const promocao_controller = require("./src/controllers/promocao.js")
const plataforma_controller = require("./src/controllers/plataforma.js")

const app = express();
const port = 3333;

app.use(express.json())

app.get("/produto", (req, res) => {
    const content = produto_controller.index()
    res.json(content)
})

app.get("/produto/:id", (req, res) => {
    const content = produto_controller.show(req.params.id)
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

app.get("/pedido", (req, res) => {
    const content = pedido_controller.index()
    res.json(content)
})

app.get("/pedido/:id", (req, res) => {
    const content = pedido_controller.show(req.params.id)
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

// entidade 3

app.get("/grupoAlimento", (req, res) => {
    const content = grupoAlimento_controller.index()
    res.json(content)
})

app.get("/grupoAlimento/:id", (req, res) => {
    const content = grupoAlimento_controller.show(req.params.id)
    res.json(content)
})

app.post("/grupoAlimento", (req, res) => {
    const code = grupoAlimento_controller.store(req.body)
    res.status(code).json()
})

app.put("/grupoAlimento/:id", (req, res) => {
    const code = grupoAlimento_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/grupoAlimento/:id", (req, res) => {
    const code = grupoAlimento_controller.destroy(req.params.id);
    res.status(code).json()
})

// entidade 4

app.get("/setorMercado", (req, res) => {
    const content = setorMercado_controller.index()
    res.json(content)
})

app.get("/setorMercado/:id", (req, res) => {
    const content = setorMercado_controller.show(req.params.id)
    res.json(content)
})

app.post("/setorMercado", (req, res) => {
    const code = setorMercado_controller.store(req.body)
    res.status(code).json()
})

app.put("/setorMercado/:id", (req, res) => {
    const code = setorMercado_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/setorMercado/:id", (req, res) => {
    const code = setorMercado_controller.destroy(req.params.id);
    res.status(code).json()
})

// entidade 5

app.get("/funcionario", (req, res) => {
    const content = funcionario_controller.index()
    res.json(content)
})

app.get("/funcionario/:id", (req, res) => {
    const content = funcionario_controller.show(req.params.id)
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

app.get("/fornecedores", (req, res) => {
    const content = fornecedores_controller.index()
    res.json(content)
})

app.get("/fornecedores/:id", (req, res) => {
    const content = fornecedores_controller.show(req.params.id)
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

// entidade 7

app.get("/niveisAcesso", (req, res) => {
    const content = niveisAcesso_controller.index()
    res.json(content)
})

app.get("/niveisAcesso/:id", (req, res) => {
    const content = niveisAcesso_controller.show(req.params.id)
    res.json(content)
})

app.post("/niveisAcesso", (req, res) => {
    const code = niveisAcesso_controller.store(req.body)
    res.status(code).json()
})

app.put("/niveisAcesso/:id", (req, res) => {
    const code = niveisAcesso_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/niveisAcesso/:id", (req, res) => {
    const code = niveisAcesso_controller.destroy(req.params.id);
    res.status(code).json()
})

// entidade 8

app.get("/promocao", (req, res) => {
    const content = promocao_controller.index()
    res.json(content)
})

app.get("/promocao/:id", (req, res) => {
    const content = promocao_controller.show(req.params.id)
    res.json(content)
})

app.post("/promocao", (req, res) => {
    const code = promocao_controller.store(req.body)
    res.status(code).json()
})

app.put("/promocao/:id", (req, res) => {
    const code = promocao_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/promocao/:id", (req, res) => {
    const code = promocao_controller.destroy(req.params.id);
    res.status(code).json()
})

// entidade 9

app.get("/plataforma", (req, res) => {
    const content = plataforma_controller.index()
    res.json(content)
})

app.get("/plataforma/:id", (req, res) => {
    const content = plataforma_controller.show(req.params.id)
    res.json(content)
})

app.post("/plataforma", (req, res) => {
    const code = plataforma_controller.store(req.body)
    res.status(code).json()
})

app.put("/plataforma/:id", (req, res) => {
    const code = plataforma_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/plataforma/:id", (req, res) => {
    const code = plataforma_controller.destroy(req.params.id);
    res.status(code).json()
})

app.listen(port, () => {
    console.log("isso executa quando o servidor inicia")
})
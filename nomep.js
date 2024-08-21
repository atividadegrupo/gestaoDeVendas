const express = require('express');
const app = express();
const port = 3000;

let produtos = [];
let proximoId = 1;

app.use(express.json());

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.post('/produtos', (req, res) => {
    const { nome } = req.body;
    const produto = { id: proximoId, nome };
    produtos.push(produto);
    proximoId++;
    res.status(201).json(produto);
});

app.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const produto = produtos.find(p => p.id === parseInt(id));
    if (produto) {
        produto.nome = nome;
        res.json(produto);
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
});

app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        produtos.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
});

app.get('/produtos/search', (req, res) => {
    const { nome } = req.query;
    const produtosEncontrados = produtos.filter(produto => produto.nome.toLowerCase().includes(nome.toLowerCase()));
    res.json(produtosEncontrados);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

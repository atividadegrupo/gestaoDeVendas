const express = require('express');
const app = express();
const port = 3000;

const setor = require('./controllers/setor.js');
const funcionario = require('./controllers/funcionario.js');
const fornecedor = require('./controllers/fornecedor.js');

app.use(express.json());

/*
    SETOR  
*/

app.post('/vendas/setor', (req, res) => {
    const code = setor.store(req.body);
    res.status(code).json();
});

app.get('/vendas/setor', (req, res) => {
    res.json(setor.showAll());
})

app.get('/vendas/setor/:id', (req, res) => {
    res.json(setor.findId(req.params.id));
})

app.put('/vendas/setor/:id', (req, res) => {
    const code = setor.update(req.params.id, req.body);
    res.status(code).json();
});

app.delete('/vendas/setor/:id', (req,res) => {
    const code = setor.destroy(req.params.id, req.body);
    res.status(code).json();
});

/*
    FUNCIONARIO
*/

app.post('/vendas/funcionario', (req, res) => {
    const code = funcionario.store(req.body);
    res.status(code).json();
});

app.get('/vendas/funcionario', (req, res) => {
    res.json(funcionario.showAll());
})

app.get('/vendas/funcionario/:id', (req, res) => {
    res.json(funcionario.findId(req.params.id));
})

app.put('/vendas/funcionario/:id', (req, res) => {
    const code = funcionario.update(req.params.id, req.body);
    res.status(code).json();
});

app.delete('/vendas/funcionario/:id', (req,res) => {
    const code = funcionario.destroy(req.params.id, req.body);
    res.status(code).json();
});

/*
    FORNECEDOR
*/

app.post('/vendas/fornecedor', (req, res) => {
    const code = fornecedor.store(req.body);
    res.status(code).json();
});

app.get('/vendas/fornecedor', (req, res) => {
    res.json(fornecedor.showAll());
})

app.get('/vendas/fornecedor/:id', (req, res) => {
    res.json(fornecedor.findId(req.params.id));
})

app.put('/vendas/fornecedor/:id', (req, res) => {
    const code = fornecedor.update(req.params.id, req.body);
    res.status(code).json();
});

app.delete('/vendas/fornecedor/:id', (req,res) => {
    const code = fornecedor.destroy(req.params.id, req.body);
    res.status(code).json();
});

app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`);
});

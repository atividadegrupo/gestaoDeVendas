const express = require('express');
const setor = require('./controllers/setor.js');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/vendas', (req, res) => {
    const code = setor.store(req.body);
    res.status(code).json();
});

app.get('/vendas', (req, res) => {
    res.json(setor.showAll());
})

app.get('/vendas/:id', (req, res) => {
    res.json(setor.findId(req.params.id));
})

app.put('/vendas/:id', (req, res) => {
    const code = setor.update(req.params.id, req.body);
    res.status(code).json();
});

app.delete('/vendas/:id', (req,res) => {
    const code = setor.destroy(req.params.id, req.body);
    res.status(code).json();
});

app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`);
});

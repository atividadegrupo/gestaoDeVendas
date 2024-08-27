const express = require("express");
const carrinho = require("./controllers/carrinho.js");
const venda = require("./controllers/venda.js");
const statusdepagamento = require("./controllers/statusdepagamento.js");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/carinho", (req, res) => {
  const carinho = req.body;
  const code = carrinho.store(carinho);
  res.status(code).json();
});

app.get("/carinho", (req, res) => {
  const carinhos = carrinho.index();
  res.json(carinhos);
});

app.get("/carinho/:id", (req, res) => {
  const carinho = carrinho.show(req.params.id);
  res.json(carinho);
});

app.put("/carinho/:id", (req, res) => {
    const carinho = req.body
    const code = carrinho.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/carinho/:id", (req, res) => {
    carinho.destroy(req.params.id)
    res.json()
})

app.listen(port, () => {
    console.log("executanto na porta " + port)
})
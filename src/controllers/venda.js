const vendas = [];
let nextId = 1;

const model = (purchase, id = nextId++) => {

  if (!purchase.id_carrinho && !purchase.id_produto && !purchase.id_saida ) {
    return null;
  }


  return {
    id,
    id_carrinho: purchase.id_carrinho, 
    id_produto: purchase.id_produto,
    id_saida: purchase.id_saida,
  };
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    vendas.push(novo);
    return 201; 
  }

  return 400; 
};

const index = () => vendas;

const show = (id) => vendas.find((el) => el.id === id); 

const update = (id, body) => {
  const index = vendas.findIndex((el) => el.id === id); 

  const novo = model({ ...body, id: parseInt(id) });

  if (novo && index !== -1) {
    vendas[index] = novo;
    return 200; 
  }

  return 400;
};

const destroy = (id) => {
  const index = vendas.findIndex((el) => el.id === id); 

  if (index !== -1) {
    vendas.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
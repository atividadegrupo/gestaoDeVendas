const carrinhos = [];
let nextId = 1;

const model = (cart, id = nextId++) => {
  
  if (!cart.nome && !cart.id_funcionario && !cart.status_pagamento) {
    return null; 
  }

  return {
    id,
    nome: cart.nome,
    id_funcionario: cart.id_funcionario,
    status_pagamento: cart.status_pagamento,
  };
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    carrinhos.push(novo);
    return 201;
  }

  return 400;
  } 

const index = () => carrinhos;

const show = (id) => carrinhos.find((el) => el.id == id);

const update = (id, body) => {
  const index = carrinhos.findIndex((el) => el.id == id);

  const novo = model({ ...body, id: parseInt(id) });

  if (novo && index != -1) {
    carrinhos[index] = novo;

    return 200; 
  }

  return 400; 
};

const destroy = (id) => {
  const index = carrinhos.findIndex((el) => el.id == id);

  if (index != -1) {
    carrinhos.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
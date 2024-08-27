const statusPagamentos = [];
let nextId = 1;

const model = (cart, id = nextId++) => {
  
  if (!cart.nome) {
    return null; 
  }

  return {
    id,
    nome: cart.nome,
    
  };
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    statusPagamentos.push(novo);
    return 201;
  }

  return 400;
  } 

const index = () => statusPagamentos;

const show = (id) => statusPagamentos.find((el) => el.id == id);

const update = (id, body) => {
  const index = statusPagamentos.findIndex((el) => el.id == id);

  const novo = model({ ...body, id: parseInt(id) });

  if (novo && index != -1) {
    statusPagamentos[index] = novo;

    return 200; 
  }

  return 400; 
};

const destroy = (id) => {
  const index = statusPagamentos.findIndex((el) => el.id == id);

  if (index != -1) {
    statusPagamentos.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
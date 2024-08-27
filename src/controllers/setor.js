const db = []; 

let lastId;

if(db.length == 0) {
    lastId = 0;
} else {
    lastId = db[db.length -1].id;
}

function model(body) {
    const id = lastId;
    if(body.nome != "") {
        return {
            id,
            nome: body.nome
        }
    } else {
        return undefined;
    }
}

function store(body) {
    lastId++;
    const cadastro = model(body);
    if(cadastro != undefined) {
        db.push(cadastro);
        return 201; // OK
    } else {
        return 400;
    }
}

function show() {
    return db;
}

function index(id) {
    return db.find(el => el.id == id);
} 
    

function update(id, body) {
    const cadastro = model(body);
    const index = db.findIndex( el => el.id == id);
    if(cadastro != undefined && index != -1) {
        db[index] = cadastro;
        return 201;
    } else {
        return 400;
    }
}

function destroy(id, body) {
    const index = db.findIndex( el => el.id == id);
    if(index != -1) {
        db.splice(db[index], 1);
        return 201;
    } else {
        return 400;
    }
}

module.exports = {store, show, index, update, destroy};
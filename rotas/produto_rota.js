const express = require('express');
const rota = express.Router();

const controller = require('../controller/produto_controller');

rota.get('/',controller.listar);
rota.get('/:id', controller.buscarPorId);
rota.post("/", controller.inserir);
rota.delete("/:id", controller.deletar);

module.exports = rota;
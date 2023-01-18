
const express = require("express");

const routes = express.Router();

const EstabelecimentosController = require('../controller/EstabelecimentoController');
const FuncionamentoController = require("../controller/FuncionamentoController");


routes.get('/estabelecimentos', EstabelecimentosController.findAll);
routes.post('/estabelecimentos',EstabelecimentosController.create);
routes.put('/estabelecimentos/:id',EstabelecimentosController.Atualizar);
routes.delete('/estabelecimentos/:id', EstabelecimentosController.delete);
routes.post('/funcionamento/:id',FuncionamentoController.openorclose);

module.exports = routes;
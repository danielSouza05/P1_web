// routes/produtoRoutes.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Definindo as rotas para produtos
router.post('/produtos', produtoController.criarProduto);
router.get('/produtos', produtoController.listarProdutos);
router.get('/produtos/:id', produtoController.buscarProdutoPorId);
router.put('/produtos/:id', produtoController.alterarProduto);
router.delete('/produtos/:id', produtoController.excluirProduto);

module.exports = router;

const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Definindo as rotas para produtos
router.post('/produtos', produtoController.criarProduto);  // Rota para criar produto
router.get('/produtos', produtoController.listarProdutos);  // Rota para listar todos os produtos
router.get('/produtos/:id', produtoController.buscarProdutoPorId);  // Rota para ver produto por ID
router.put('/produtos/:id', produtoController.alterarProduto);  // Rota para alterar produto
router.delete('/produtos/:id', produtoController.excluirProduto);  // Rota para excluir produto

module.exports = router;
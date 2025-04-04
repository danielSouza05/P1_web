const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// definindo as rotas para produtos
router.post('/produtos', produtoController.criarProduto);  // rota pra criar produto
router.get('/produtos', produtoController.listarProdutos);  // rota pra listar todos os produtos
router.get('/produtos/:id', produtoController.buscarProdutoPorId);  // rota para ver produto por id
router.put('/produtos/:id', produtoController.alterarProduto);  // rota para alterar produto
router.delete('/produtos/:id', produtoController.excluirProduto);  // rota para excluir produto

module.exports = router;
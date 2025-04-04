const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Definindo as rotas para usuários
router.post('/usuarios', usuarioController.criarUsuario);
router.get('/usuarios', usuarioController.listarUsuarios);
router.get('/usuarios/:id', usuarioController.buscarUsuarioPorId);
router.put('/usuarios/:id', usuarioController.atualizarUsuario);
router.delete('/usuarios/:id', usuarioController.excluirUsuario);

module.exports = router;

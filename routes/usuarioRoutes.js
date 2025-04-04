const express = require('express');
const router = express.Router();

// Importando o controlador de usuários
const usuarioController = require('../controllers/usuarioController');

// Rota para cadastrar um usuário
router.post('/usuarios', usuarioController.criarUsuario);

// Rota para listar todos os usuários
router.get('/usuarios', usuarioController.listarUsuarios);

// Rota para retornar um usuário específico pelo ID
router.get('/usuarios/:id', usuarioController.buscarUsuarioPorId);

// Rota para atualizar os dados de um usuário específico
router.put('/usuarios/:id', usuarioController.atualizarUsuario);

// Rota para excluir um usuário específico pelo ID
router.delete('/usuarios/:id', usuarioController.excluirUsuario);

module.exports = router;

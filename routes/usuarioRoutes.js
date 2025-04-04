const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


router.post('/usuarios', usuarioController.criarUsuario); // rota pra criar um novo usuario
router.get('/usuarios', usuarioController.listarUsuarios); // rota pra listar todos os usuarios
router.get('/usuarios/:id', usuarioController.buscarUsuarioPorId);// rota pra buscar um usuario específico pelo ID
router.put('/usuarios/:id', usuarioController.atualizarUsuario); // rota pra atualizar os dados de um usuario especifico
router.delete('/usuarios/:id', usuarioController.excluirUsuario); // rota para excluir um usuario especifico pelo id

module.exports = router;

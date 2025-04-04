const usuarioModel = require('../models/usuarioModel');

// Função para criar um novo usuário
function criarUsuario(req, res) {
  const { nome, email, senha } = req.body;

  // Validação dos campos
  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  usuarioModel.criarUsuario({ nome, email, senha }, (err, usuarioCriado) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao criar o usuário' });
    }
    res.status(201).json(usuarioCriado);
  });
}

// Função para listar todos os usuários
function listarUsuarios(req, res) {
  usuarioModel.listarUsuarios((err, usuarios) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao listar usuários' });
    }
    res.status(200).json(usuarios);
  });
}

// Função para buscar um usuário por ID
function buscarUsuarioPorId(req, res) {
  const { id } = req.params;
  usuarioModel.buscarUsuarioPorId(id, (err, usuario) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao buscar usuário' });
    }
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
  });
}

// Função para atualizar os dados de um usuário
function atualizarUsuario(req, res) {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  // Validação dos dados
  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  usuarioModel.atualizarUsuario(id, { nome, email, senha }, (err, usuarioAtualizado) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
    res.status(200).json(usuarioAtualizado);
  });
}

// Função para excluir um usuário
function excluirUsuario(req, res) {
  const { id } = req.params;
  usuarioModel.excluirUsuario(id, (err, resultado) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao excluir usuário' });
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  });
}

module.exports = {
  criarUsuario,
  listarUsuarios,
  buscarUsuarioPorId,
  atualizarUsuario,
  excluirUsuario
};

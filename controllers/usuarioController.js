const usuarioModel = require('../models/usuarioModel');  // Importando o model de usuário

// Função para criar um novo usuário
function criarUsuario(req, res) {
  const { nome, email, senha } = req.body;

  if (!nome || nome.length < 3) {
    return res.status(400).json({ message: 'O nome do usuário deve ter pelo menos 3 caracteres' });
  }

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Email inválido' });
  }

  if (!senha || senha.length < 6) {
    return res.status(400).json({ message: 'A senha deve ter pelo menos 6 caracteres' });
  }

  usuarioModel.criarUsuario(req.body, (err, usuarioCriado) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao criar o usuário' });
    }
    res.status(201).json(usuarioCriado);  // Retorna o usuário criado
  });
}

// Função para listar todos os usuários
function listarUsuarios(req, res) {
  usuarioModel.listarUsuarios((err, usuarios) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao listar usuários' });
    }
    res.status(200).json(usuarios);  // Retorna todos os usuários
  });
}

// Função para buscar um usuário específico pelo ID
function buscarUsuarioPorId(req, res) {
  const { id } = req.params;

  usuarioModel.buscarUsuarioPorId(id, (err, usuario) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao buscar usuário' });
    }

    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.status(200).json(usuario);  // Retorna o usuário encontrado
  });
}

// Função para atualizar os dados de um usuário
function atualizarUsuario(req, res) {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  // Validação dos dados
  if (!nome || nome.length < 3) {
    return res.status(400).json({ message: 'O nome do usuário deve ter pelo menos 3 caracteres' });
  }

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Email inválido' });
  }

  if (!senha || senha.length < 6) {
    return res.status(400).json({ message: 'A senha deve ter pelo menos 6 caracteres' });
  }

  usuarioModel.atualizarUsuario(id, req.body, (err, usuarioAtualizado) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao atualizar o usuário' });
    }

    res.status(200).json(usuarioAtualizado);  // Retorna o usuário atualizado
  });
}

// Função para excluir um usuário pelo ID
function excluirUsuario(req, res) {
  const { id } = req.params;

  usuarioModel.excluirUsuario(id, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao excluir o usuário' });
    }

    res.status(204).send();  // Resposta sem corpo (204 No Content)
  });
}

module.exports = {
  criarUsuario,
  listarUsuarios,
  buscarUsuarioPorId,
  atualizarUsuario,
  excluirUsuario
};
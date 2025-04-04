const usuarioModel = require('../models/usuarioModel');

// função pra criar novo usuario
function criarUsuario(req, res) 
{
  const { nome, email, senha } = req.body;

  // validação dos campos
  if (!nome || !email || !senha) 
  {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  usuarioModel.criarUsuario({ nome, email, senha }, (err, usuarioCriado) => 
  {
    if (err) 
    {
      return res.status(500).json({ message: 'Erro ao criar o usuário' });
    }
    res.status(201).json(usuarioCriado);
  });
}

// função pra listar todos os usuarios
function listarUsuarios(req, res) 
{
  usuarioModel.listarUsuarios((err, usuarios) => 
  {
    if (err) 
    {
      return res.status(500).json({ message: 'Erro ao listar usuários' });
    }
    res.status(200).json(usuarios);
  });
}

// fnção pra buscar um usuario pelo id
function buscarUsuarioPorId(req, res) 
{
  const { id } = req.params;  // pega o id do usuario a partir dos parametros da url
  usuarioModel.buscarUsuarioPorId(Number(id), (err, usuario) => 
  {
    if (err) 
    {
      return res.status(500).json({ message: 'Erro ao buscar usuário' });
    }

    if (!usuario) 
    {
      return res.status(404).json({ message: 'Usuário não encontrado!' });
    }

    res.status(200).json(usuario);  // retorna o usuario encontrado
  });
}

// função pra atualizar os dados de um usuario
function atualizarUsuario(req, res) 
{
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  // Validação dos dados
  if (!nome || !email || !senha) 
  {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  usuarioModel.atualizarUsuario(id, { nome, email, senha }, (err, usuarioAtualizado) => 
  {
    if (err) 
    {
      return res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
    res.status(200).json(usuarioAtualizado);
  });
}

// função para excluir um usuario
function excluirUsuario(req, res) 
{
  const { id } = req.params;
  usuarioModel.excluirUsuario(id, (err, resultado) => 
  {
    if (err) 
    {
      return res.status(500).json({ message: 'Erro ao excluir usuário' });
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  });
}

module.exports = 
{
  criarUsuario,
  listarUsuarios,
  buscarUsuarioPorId,
  atualizarUsuario,
  excluirUsuario
};

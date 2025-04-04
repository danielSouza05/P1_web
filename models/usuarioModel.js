const db = require('./database');  // conexão com o banco de dados

// função pra criar um novo usuario
function criarUsuario(usuario, callback) 
{
  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.query(query, [usuario.nome, usuario.email, usuario.senha], (err, results) => 
  {
    if (err) 
    {
      console.error('Erro ao criar o usuário:', err);
      return callback(err, null);
    }
    callback(null, { id: results.insertId, ...usuario });
  });
}

// fnção pra listar todos os usuarios
function listarUsuarios(callback) 
{
  const query = 'SELECT * FROM usuarios';
  db.query(query, (err, results) => 
  {
    if (err) 
    {
      return callback(err, null);
    }
    callback(null, results);
  });
}

// funçao pra buscar um usuario por id
function buscarUsuarioPorId(id, callback) 
{
  const query = 'SELECT * FROM usuarios WHERE id = ?';
  db.query(query, [id], (err, results) => 
  {
    if (err) 
    {
      return callback(err, null);
    }
    callback(null, results[0]);
  });
}

// função pra atualizar um usuario
function atualizarUsuario(id, usuario, callback) 
{
  const query = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?';
  db.query(query, [usuario.nome, usuario.email, usuario.senha, id], (err, results) => 
  {
    if (err) 
    {
      return callback(err, null);
    }
    callback(null, { id, ...usuario });
  });
}

// funçao pra excluir um usuario
function excluirUsuario(id, callback) 
{
  const query = 'DELETE FROM usuarios WHERE id = ?';
  db.query(query, [id], (err, results) => 
  {
    if (err) 
    {
      return callback(err, null);
    }
    callback(null, results);
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

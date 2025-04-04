const db = require('./database');  // Conexão com o banco de dados

// Função para criar um usuário no banco
function criarUsuario(usuario, callback) {
  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.query(query, [usuario.nome, usuario.email, usuario.senha], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, { id: results.insertId, ...usuario });
  });
}

// Função para listar todos os usuários
function listarUsuarios(callback) {
  const query = 'SELECT * FROM usuarios';
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
}

// Função para buscar um usuário pelo ID
function buscarUsuarioPorId(id, callback) {
  const query = 'SELECT * FROM usuarios WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results[0]);
  });
}

// Função para atualizar os dados de um usuário
function atualizarUsuario(id, usuario, callback) {
  const query = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?';
  db.query(query, [usuario.nome, usuario.email, usuario.senha, id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, { id, ...usuario });
  });
}

// Função para excluir um usuário
function excluirUsuario(id, callback) {
  const query = 'DELETE FROM usuarios WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

module.exports = {
  criarUsuario,
  listarUsuarios,
  buscarUsuarioPorId,
  atualizarUsuario,
  excluirUsuario
};
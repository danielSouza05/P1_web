const db = require('./database');  // Conexão com o banco de dados

function criarProduto(produto, callback) 
{
  const query = 'INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)';

  // Executa a consulta para inserir o produto no banco de dados
  db.query(query, [produto.nome, produto.preco, produto.estoque], (err, results) => 
  {
    if (err) 
    {
      console.error('Erro ao inserir produto no banco:', err);
      callback(err, null);
    } 
    else 
    {
      callback(null, { id: results.insertId, ...produto });
    }
  });
}

function listarProdutos(callback) 
{
  const query = 'SELECT * FROM produtos';
  db.query(query, (err, results) => 
  {
    if (err) 
    {
      return callback(err, null);
    }
    callback(null, results);
  });
}

function buscarProdutoPorId(id, callback) 
{
  const query = 'SELECT * FROM produtos WHERE id = ?';
  db.query(query, [id], (err, results) => 
  {
    if (err) 
    {
      return callback(err, null);
    }
    callback(null, results[0]);  // retorna o primeiro produto encontrado
  });
}

function alterarProduto(id, novosDados, callback) 
{
  const query = 'UPDATE produtos SET nome = ?, preco = ?, estoque = ? WHERE id = ?';
  db.query(query, [novosDados.nome, novosDados.preco, novosDados.estoque, id], (err, results) => 
  {
    if (err) 
    {
      return callback(err, null);
    }
    callback(null, { id, ...novosDados });
  });
}

function excluirProduto(id, callback) 
{
  const query = 'DELETE FROM produtos WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) 
    {
      return callback(err, null);
    }
    callback(null, results);
  });
}

module.exports = 
{
  criarProduto,
  listarProdutos,
  buscarProdutoPorId,
  alterarProduto,
  excluirProduto
};
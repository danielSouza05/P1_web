const produtoModel = require('../models/produtoModel');

function criarProduto(req, res) 
{
  const { nome, preco, estoque } = req.body;
  console.log('Dados recebidos para cadastro de produto:', req.body);  // Log dos dados recebidos

  // validação de tipo
  if (typeof preco !== 'number' || isNaN(preco)) 
  {
    return res.status(400).json({ message: 'Preço deve ser um número válido' });
  }

  if (typeof estoque !== 'number' || isNaN(estoque)) 
  {
    return res.status(400).json({ message: 'Estoque deve ser um número válido' });
  }

  // validações de campos
  if (!nome || nome.length < 3) 
  {
    return res.status(400).json({ message: 'O nome do produto deve ter pelo menos 3 caracteres' });
  }

  if (preco <= 0) 
  {
    return res.status(400).json({ message: 'O preço do produto deve ser maior que zero' });
  }

  if (estoque < 0 || !Number.isInteger(estoque)) 
  {
    return res.status(400).json({ message: 'O estoque deve ser um número inteiro maior ou igual a zero' });
  }

  // verificando a inserção do produto
  produtoModel.criarProduto(req.body, (err, produtoCriado) => 
  {
    if (err) 
    {
      console.error('Erro ao criar produto:', err);  // log de erro do produto
      return res.status(500).json({ message: 'Erro ao criar o produto' });
    }

    console.log('Produto criado:', produtoCriado);  // log do produto criado
    res.status(201).json(produtoCriado);  // retorna o produto criado
  });
}

// função pra listar todos os produtos
function listarProdutos(req, res) 
{
  produtoModel.listarProdutos((err, produtos) => 
  {
    if (err) 
    {
      return res.status(500).json({ message: 'Erro ao listar produtos' });
    }
    res.status(200).json(produtos);  // retorna todos os produtos cadastrados
  });
}


// funçao para buscar um produto por id
function buscarProdutoPorId(req, res) 
{
  const { id } = req.params;  // pega o id do produto a partir dos parametros da url
  produtoModel.buscarProdutoPorId(Number(id), (err, produto) => 
  {
    if (err) 
    {
      return res.status(500).json({ message: 'Erro ao buscar produto' });
    }

    if (!produto) 
    {
      return res.status(404).json({ message: 'Produto não encontrado!' });
    }

    res.status(200).json(produto);  // retorna o produto encontrado
  });
}


// função pra alterar produto
function alterarProduto(req, res) 
{
  const { id } = req.params;
  const novosDados = req.body;

  produtoModel.alterarProduto(Number(id), novosDados, (err, produtoAtualizado) => 
  {
    if (err) 
    {
      return res.status(500).json({ message: 'Erro ao alterar produto' });
    }

    res.status(200).json(produtoAtualizado);  // Retorna o produto atualizado
  });
}

// Função para excluir um produto
function excluirProduto(req, res) 
{
  const { id } = req.params;

  produtoModel.excluirProduto(Number(id), (err, resultado) => 
  {
    if (err) 
    {
      return res.status(500).json({ message: 'Erro ao excluir produto' });
    }

    res.status(200).json({ message: 'Produto excluído com sucesso!' });
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
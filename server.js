/*import {createServer} from 'http'

const server = createServer((request, response)=>
{
    response.write('eai')

    return response.end()
})

server.listen(3333, ()=>
{
    console.log('servidor rodando na porta 3333')
})*/

const express = require('express');
const path = require('path');
const app = express();

// Middleware para processar JSON no corpo da requisição
app.use(express.json());

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Importando as rotas de usuários e produtos
const produtoRoutes = require('./routes/produtoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');  // Adicionando a importação das rotas de usuários

// Usando as rotas
app.use('/api', produtoRoutes);  // As rotas de produtos
app.use('/api', usuarioRoutes);  // As rotas de usuários

// Servindo as páginas HTML
app.get('/cadastroUsuario', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cadastroUsuario.html'));
}); 

app.get('/listarUsuarios', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'listarUsuarios.html'));
});


app.get('/cadastroProduto', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cadastroProduto.html'));
});

app.get('/listarProdutos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'listarProdutos.html'));
});

// Iniciando o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


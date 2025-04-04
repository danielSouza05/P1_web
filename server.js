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

// Importando as rotas de usuários
const usuarioRoutes = require('./routes/usuarioRoutes');  // Caminho correto para o arquivo usuarioRoutes.js

// Usando a rota de usuários
app.use('/api', usuarioRoutes);  // Prefixo '/api' para todas as rotas de usuários

// Configuração para servir os arquivos HTML
app.get('/cadastroProduto', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cadastroProduto.html'));
});

app.get('/cadastroUsuario', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cadastroUsuario.html'));
});

// Configuração para iniciar o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

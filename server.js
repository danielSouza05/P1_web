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

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const produtoRoutes = require('./routes/produtoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');  // adicionando a importaçao das rotas de usuarios

app.use('/api', produtoRoutes);  
app.use('/api', usuarioRoutes);  

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

// iniciando o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


const mysql = require('mysql2');

const connection = mysql.createConnection
({
    host: 'localhost',
    user: 'root',
    password: 'Zeldalol01',
    database: 'Lojinha'
});

connection.query('SELECT 1 + 1 AS solution', (err, results) => 
  {
    if (err) 
    {
      console.error('Erro na consulta: ', err);
      return;
    }
    console.log('Resultado da consulta: ', results);  // exibe o resultado da consulta
  });
  
module.exports = connection;
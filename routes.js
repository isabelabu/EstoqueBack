const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection(config);

router.get('/produtos', async (req, res) => {
  const produtos = await connection.query('SELECT * FROM produtos');
  res.json(produtos);
});

router.get('/produtos/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const produto = await connection.query('SELECT * FROM produtos WHERE id = ?', [id]);

  if (!produto.length) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  res.json(produto[0]);
});

router.post('/produtos', async (req, res) => {
  const { nome, descricao, preco, quantidade, imagem } = req.body;
  await connection.query('INSERT INTO produtos (nome, descricao, preco, quantidade, imagem) VALUES (?, ?, ?, ?, ?)', [nome, descricao, preco, quantidade, imagem]);
  res.json({ message: 'Produto criado com sucesso!' });
});

router.put('/produtos/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, descricao, preco, quantidade, imagem } = req.body;
  await connection.query('UPDATE produtos SET nome = ?, descricao = ?, preco = ?, quantidade = ?, imagem = ?, WHERE id = ?', [nome, descricao, preco, quantidade, imagem, id]);
  res.json({ message: 'Produto atualizado com sucesso!' });
});

router.delete('/produtos/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await connection.query('DELETE FROM produtos WHERE id = ?', [id]);
  res.json({ message: 'Produto excluído com sucesso!' });
});

module.exports = router;

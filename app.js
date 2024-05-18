const express = require('express')
const app = express();
const port = 8080;
const router = require('./routers/estoqueRoute.js');
const connection = require('./config/connect.js');
const tables = require('./config/tables.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

tables.init(connection);

app.use(router);

app.get('/', (req, res) => {
  res.send('Funcionando')
})

app.listen(port, (error) => {
  if(error){
    console.log(`Erro`);
    return;
  }
  console.log(`Rodando na porta ${port}`)
})
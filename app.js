const express = require('express')
const app = express()
const port = 8080;
const router = require('./routes');

app.use(express.json()); 

connection.connect(function(err) {
  if (err) {
      console.error('Erro ao conectar ao MySQL:', err);
      return;
  }
  console.log('Conectado ao MySQL com sucesso!');
});


app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Funcionando')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
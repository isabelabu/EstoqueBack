
# App de Estoque

Esse é o repositório que contém o Back-End do case proposto pelo processo seletivo da MindGroup.

[Clique aqui para ver o front-end.](https://github.com/isabelabu/EstoqueFront)

## 🎯 Desafio 

Contexto: Sistema de estoque 

**Requisitos:**
- Registrar, visualizar, editar e remover produtos.
- Entrada e saída de produtos.
- Login e cadastro de usuários.
- O projeto deve ser feito em ReactJS ou React Native. ✅
- O backend deve ser feito com NodeJS Express. ✅
- O banco de dados deve ser MySQL. ✅
- O produto deve ter as propriedades de nome, descrição, imagem, valor, quantidade atual. ✅
- O usuário deve ter nome, email e senha. ✅
- As senhas de acesso precisam ser criptografadas com bcrypt.
- O TypeScript deve ser utilizado como linguagem no projeto ✅
- O dump do banco de dados precisa estar junto com o projeto ✅

## 📌 Sobre o repositório

Esse é um projeto em Node Express que usa banco de dados MySQL.

Para rodar, use o comando:

```bash
node app.js
# ou
npx nodemon
```

E abra [http://localhost:8080](http://localhost:8080) com seu navegador.

### Banco de Dados

Caso não tenha o MySQL instalado, baixe o instalador no [site oficial](https://dev.mysql.com/downloads/mysql/) e execute a instalação de acordo com o seu sistema operacional. 

O dump está no arquivo script.sql

#### Observações
- Durante esse processo, sempre ocorriam erros quando eu tentava conectar no banco. Para solucioná-los, executei o comando: `npm install mysql2` e atualizei a requisição no arquivo connect.js

- Nas configurações de conexão, minha senha é "macaco" porque corresponde ao que eu coloquei no MySQL, já que não consegui deixá-la vazia. Se for utilizar o código, use o usuário e a senha correspondentes às suas configurações do banco de dados.

### Problemas

Editar e excluir não estão funcionando, já que o sistema sempre retorna um erro de sintaxe que não consegui resolver:

```bash
# put 
"You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'WHERE id = '2'' at line 1" 

# delete
"You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 1"
```
Considerei usar o mysql em vez do mysql2 para resolver o problema de sintaxe, porém ele não aceita o protocolo de autenticação do servidor. Achei que seria melhor manter dessa forma, porque pelo menos sei que o `get` e o `post` estão funcionando.

Apesar de existir no banco de dados, a tabela de usuários não é utilizada, já que eu também não consegui fazer uma página de login no front-end e nem realizar a autenticação solicitada.

### Material de referência

- [Playlist: CRUD - Node JS com Express e MYSQL](https://youtube.com/playlist?list=PLrnHpYM1USWy-aOQFOCOrU0bVkIsflEz-&si=503tZZ3-e7BOBbWb)
- [Repositório do projeto criado nas videoaulas da playlist](https://github.com/andrevitor103/Controle-atendimentos-NodeJS-curso-youtube)
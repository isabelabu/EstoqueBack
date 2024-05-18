const Router = require("express").Router;
const router = Router();
const estoqueController = require("../controllers/estoqueController.js");

router.get("/estoque/produtos", (req, res) =>{
    const listaProdutos = estoqueController.listar();
    listaProdutos.then(listaProdutos => res.status(200).json(listaProdutos)).catch(error => res.status(400).json(error.message));
});

router.post("/estoque/produtos", (req,res) =>{
    const novoProduto = req.body;
    const produto = estoqueController.criar(novoProduto);
    produto.then(produtoCriado => res.status(201).json(produtoCriado)).catch(error => res.status(400).json(error.message));
});

router.put("/estoque/produto/:id", (req,res) =>{
    const {id} = req.params;
    const resposta = estoqueController.alterar(id);
    res.send(resposta);
});

router.delete("/estoque/produto/:id", (req,res) =>{
    const {id} = req.params;
    const resposta = estoqueController.excluir(id);
    res.send(resposta);
});

module.exports = router;
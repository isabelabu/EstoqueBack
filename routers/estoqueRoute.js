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
    const produtoAtualizado = req.body;
    const produto = estoqueController.editar(produtoAtualizado, id);
    produto.then(produtoEditado => res.status(201).json(produtoEditado)).catch(error => res.status(400).json(error.message));
});

router.delete("/estoque/produto/:id", (req,res) =>{
    const {id} = req.params;
    const produtoExcluido = req.body;
    const produto = estoqueController.excluir(produtoExcluido, id);
    produto.then(produtoDeletado => res.status(201).json(produtoDeletado)).catch(error => res.status(400).json(error.message));
});

module.exports = router;
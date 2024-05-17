const Router = require("express").Router;
const router = Router();
const estoqueController = require("../controllers/estoqueController.js");

router.get("/estoque/produtos", (req, res) =>{
    const resposta = estoqueController.listar();
    res.send(resposta);
});

router.post("/estoque/produtos", (req,res) =>{
    const resposta = estoqueController.criar();
    res.send(resposta);
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
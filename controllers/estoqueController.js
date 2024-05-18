const estoqueModel = require("../models/estoqueModel");

class estoqueController{
    listar(){
        return estoqueModel.listar();
    }
    criar(novoProduto){
        return estoqueModel.criar(novoProduto);
    }
    alterar(id){
        return "Alterando produto " + id;
    }
    excluir(id){
        return "Excluindo produto " + id;
    }
}

module.exports = new estoqueController();
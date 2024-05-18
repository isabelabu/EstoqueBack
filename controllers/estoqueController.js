const estoqueModel = require("../models/estoqueModel");

class estoqueController{
    listar(){
        return estoqueModel.listar();
    }
    criar(novoProduto){
        return estoqueModel.criar(novoProduto);
    }
    alterar(produtoAtualizado, id){
        return estoqueModel.editar(produtoAtualizado, id);
    }
    excluir(produtoExcluido, id){
        return estoqueModel.excluir(produtoExcluido, id);
    }
}

module.exports = new estoqueController();
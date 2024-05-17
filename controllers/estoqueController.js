class estoqueController{
    listar(){
        return "Listando produtos";
    }
    criar(){
        return "Criando produto";
    }
    alterar(id){
        return "Alterando produto " + id;
    }
    excluir(id){
        return "Excluindo produto " + id;
    }
}

module.exports = new estoqueController();
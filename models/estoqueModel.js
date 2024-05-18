const connection = require("../config/connect");

class estoqueModel{
    listar(){
        const sql = "SELECT * FROM produtos"
        return new Promise((resolve,reject) =>{
            connection.query(sql, {}, (error, resposta) => {
                if(error){
                    console.log("Erro: não foi possível listar os produtos");
                    reject(error);
                }
                console.log("Produtos listados");
                resolve(resposta);
            });
        })
    }

    criar(novoProduto){
        const sql = "INSERT INTO produtos SET ?";
        return new Promise((resolve, reject) => {
            connection.query(sql, novoProduto, (error, resposta) => {
                if(error){
                    console.log("Erro: não foi possível criar o produto");
                    reject(error);
                }
                console.log("Produto criado");
                resolve(resposta);
            }); 
        })
        
    }

    editar(produtoAtualizado, id){
        const sql = "UPDATE produtos SET ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            connection.query(sql, [produtoAtualizado, id], (error, resposta) => {
                if(error){
                    console.log("Erro: não foi possível editar o produto");
                    reject(error);
                }
                console.log("Produto atualizado");
                resolve(resposta);
            }); 
        })
        
    }

    excluir(produtoExcluido, id){
        const sql = "DELETE FROM produtos WHERE id = ?";
        return new Promise((resolve, reject) => {
            connection.query(sql, [produtoExcluido, id], (error, resposta) => {
                if(error){
                    console.log("Erro: não foi possível excluir o produto");
                    reject(error);
                }
                console.log("Produto excluído");
                resolve(resposta);
            }); 
        })
        
    }
}

module.exports = new estoqueModel;
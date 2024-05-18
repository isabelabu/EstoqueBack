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
}

module.exports = new estoqueModel;
class Tables{
    init(connection){
        this.connection = connection;
        this.createTableProduto();
    }

    createTableProduto(){
        const sql = 
        `
        CREATE TABLE IF NOT EXISTS produtos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(60) NOT NULL,
            descricao VARCHAR(150),
            preco DECIMAL(10,2) NOT NULL,
            quantidade int not null,
            imagem BLOB
          );
        `;
        this.connection.query(sql, (error) =>{
            if(error){
                console.log("Erro ao criar a tabela produto")
                console.log(error.message);
                return;
            }
            console.log("Tabela produto criada");
        }
        );
    }
}

module.exports = new Tables();
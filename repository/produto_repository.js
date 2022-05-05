const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'postgres',
    database: 'crud_produtos'
};


exports.listar = async () => {
    const cliente = new Client(conexao);
    cliente.connect();
    try{ 
        const resultado = await cliente.query("SELECT * from produtos");
        cliente.end();
        return (resultado.rows);
    }
    catch (err) { throw err; }
}

exports.buscarPorId = async (id) => {
    const sql = "SELECT * FROM produtos WHERE id=$1";
    const values = [id];

    const cliente = new Client(conexao);
    cliente.connect();

    try{
        const resultado = await cliente.query(sql, values);
        cliente.end();
        return(resultado.rows[0]);        
    }
    catch (err) {
        let error = {};
        error.name = err.name;
        error.message = err.message;
        error.status = 500; 
        throw error; 
    }
}

exports.inserir = async (produto) => {
    const sql = "INSERT INTO produtos(nome, preco) VALUES ($1, $2) RETURNING *";
    const values = [produto.nome, produto.preco];

    const cliente = new Client(conexao);
    cliente.connect();
    
    try{
        const resultado = await cliente.query(sql, values);
        cliente.end();
        return(resultado.rows[0]);
    }
    catch(err) {
        let error = {};
        error.name = err.name;
        error.message = err.message;
        error.status = 500; 
        throw error; 
    }

}
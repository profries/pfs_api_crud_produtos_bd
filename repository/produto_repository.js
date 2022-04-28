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

exports.buscarPorId = (id) => {

}

exports.inserir = (produto) => {

}
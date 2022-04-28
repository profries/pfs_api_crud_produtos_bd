const produtoRepository = require('../repository/produto_repository');

let listaProdutos = [];
let idAutoIncrement = 1;

exports.listar = async () => {
    try { 
    const listaProdutos = await produtoRepository.listar();
    return listaProdutos;
    } catch(err) { throw err; }
}

exports.buscarPorId = (id) => {
    const produto = listaProdutos.find(
        (produto) => produto.id == id
    );

    if(!produto){
        throw new Error("Produto nao encontrado");
    }
    else {
        return produto;
    }
}

exports.inserir = (produto) => {
    if(produto && produto.nome && produto.preco){
        produto.id = idAutoIncrement++;
        listaProdutos.push(produto);
        return produto;
    }
    else {
        throw new Error("Falta parametros de produto");
    }
}

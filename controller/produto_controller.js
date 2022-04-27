
const produtoNegocio = require('../negocio/produto_negocio');

exports.listar = (req, res) => {
    const lista = produtoNegocio.listar();
    res.json(lista);
}

exports.buscarPorId = (req, res) => {
    const id = req.params.id;
    try{
        const produto = produtoNegocio.buscarPorId(id);
        res.json(produto);                
    }
    catch (err) {
        res.status(404).json({erro: err.msg});        
    }
}

exports.inserir = (req, res) => {
    const produto = req.body;
    
    try{ 
        const produtoInserido = produtoNegocio.inserir(produto);
        res.status(201).json(produto);
    }
    catch(err) {
        res.status(400).json({erro: err.msg})
    }   
}

exports.deletar = (req, res) => {
    const id = req.params.id;

    const indice = listaProdutos.findIndex(
        (produto) => produto.id == id
    );

    if(indice < 0) {
        res.status(404).json({erro:"Produto não encontrado!"});        
    }
    else {
        const produtoDeletado = listaProdutos.splice(indice, 1);
        res.json(produtoDeletado);
    }
}
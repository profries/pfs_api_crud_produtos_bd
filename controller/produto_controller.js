
const produtoNegocio = require('../negocio/produto_negocio');

exports.listar = async (req, res) => {
    try{ 
        const lista = await produtoNegocio.listar();
        res.json(lista);
    } catch (err) {
        res.status(500).json({error: err});
    }
}

exports.buscarPorId = async (req, res) => {
    const id = req.params.id;
    try{
        const produto = await produtoNegocio.buscarPorId(id);
        res.json(produto);                
    }
    catch (err) {
        if(err.status) {
            res.status(err.status).json(err);
        }
        else {
            res.status(500).json({message: "Erro nao identificado"});            
        }
    }
}

exports.inserir = async (req, res) => {
    const produto = req.body;
    
    try{ 
        const produtoInserido = await produtoNegocio.inserir(produto);
        res.status(201).json(produto);
    }
    catch(err) {
        if(err.status) {
            res.status(err.status).json(err);
        }
        else {
            res.status(500).json({message: "Erro nao identificado"});            
        }
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
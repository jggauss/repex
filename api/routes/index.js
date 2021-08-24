const express = require("express")
const bodyParser = require('body-parser')
const clientes = require('./api/routes/clientesRoute')
const industrias = require('./api/routes/industriasRoute')
const vendedores = require('./api/routes/vendedorRoute')
const produtos = require('./api/routes/produtosRoute')
const pedidos = require('./api/routes/pedidosRoute')




const app=express();

module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended : false }));
    app.use(clientes)
    app.use(industrias)
    app.use(vendedores)
    app.use(produtos)
    app.use(pedidos)
    
}



  

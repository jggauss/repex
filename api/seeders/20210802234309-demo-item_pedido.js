'use strict';

const { query } = require("express");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Itens_pedidos', [
    {
       pedido_id:1,
       produto_id:1,
       quantidade_item:10,
       preco_item:19.90,
       valor_st_item:0,
       valor_acrescimo_item:0,
       valor_desconto_item:0,
       createdAt: new Date(),
       updatedAt: new Date()
   },
   {
    pedido_id:2,
    produto_id:2,
    quantidade_item:11,
    preco_item:29.90,
    valor_st_item:0,
    valor_acrescimo_item:0,
    valor_desconto_item:0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    pedido_id:2,
    produto_id:2,
    quantidade_item:9,
    preco_item:19.90,
    valor_st_item:0,
    valor_acrescimo_item:0,
    valor_desconto_item:0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
       

],{})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Itens_pedidos',null,{})
  }
}


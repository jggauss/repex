'use strict';

const { query } = require("express");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pedidos', [
    {
        cliente_id: 1,
			  vendedor_id: 1,
				industria_id: 1,
			  frete: 43.50,
			  valor_total: 95,
			  valor_st_total: 0,
			  valor_desconto_total: 0,
			  valor_acrescimo_total: 0,
        //status_pedido:"",
        faturado:0,
        nota_fiscal:'123456',
        vencimento_boleto:'2022-01-30',
        data_prevista_pagamento:'2022-02-15',
        //status_comissao:"",
        createdAt: new Date(),
        updatedAt: new Date()

   },
   {
        cliente_id: 2,
			  vendedor_id: 2,
				industria_id: 2,
			  frete: 33.50,
			  valor_total: 115,
			  valor_st_total: 1,
			  valor_desconto_total: 1,
			  valor_acrescimo_total: 1,
        //status_pedido:"",
        faturado:1,
        nota_fiscal:'111111',
        vencimento_boleto:'2021-10-30',
        data_prevista_pagamento:'2021-12-15',
        //status_comissao:"",
        createdAt: new Date(),
        updatedAt: new Date()
        
   },

],{})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Pedidos',null,{})
  }
}

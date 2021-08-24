'use strict';

const { query } = require("express");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Produtos', [
    {
        sku: "789789789",
			  nome_produto: "Produto verde",
				preco: 19.90,
			  peso_bruto: 2.3,
			  altura: 15,
			  largura: 30,
			  comprimento: 47,
			  fabricante_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
   },
   {
    sku: "879879879",
    nome_produto: "Produto azul",
    preco: 29.90,
    peso_bruto: 1.3,
    altura: 18,
    largura: 32,
    comprimento: 32,
    fabricante_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
  sku: "123123",
  nome_produto: "Produto Amarelo",
  preco: 9.90,
  peso_bruto: 0.3,
  altura: 12,
  largura: 16,
  comprimento: 16,
  fabricante_id: 2,
  createdAt: new Date(),
  updatedAt: new Date()
},


],{})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Produtos',null,{})
  }
}
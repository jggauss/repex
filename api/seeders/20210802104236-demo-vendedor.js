'use strict';

const { query } = require("express");


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vendedores', [
    {
      nome: "José Geraldo",
      email: "vendas@jubileualimentos.com.br",
      telefone:"(31) 2523 3460",
      comissao:0,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
    nome: "José de Barros",
    email: "jose@jose.com.br",
    telefone:"(31) 2523 5856",
    comissao:0,
    createdAt: new Date(),
    updatedAt: new Date()
 },

],{})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Vendedores',null,{})
  }
}

'use strict';

const { query } = require("express");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clientes', [
    {
        cnpj: "28.532.897/0001-72",
			  razao_social: "Loja verde",
				nome_fantasia: "Loja verde",
			  logradouro: "Rua da Laguna",
			  numero: "23",
			  complemento: "Loja1",
			  bairro: "Jardim Glória",
			  cidade: "Belo Horizonte",
			  uf: "MG",
			  cep: "30-840-490",
			  email_contato: "lojaverde@gmail.com",
			  email_xml: "lojaverde2@gmail.com",
			  telefone1: "(032) 3532 8980",
			  telefone2: "(032) 3532 8980",
			 	vendedor_do_cliente_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
   },
   {
        cnpj: "88.552.825/0001-72",
        razao_social: "Loja Azul",
        nome_fantasia: "Loja Azul",
        logradouro: "Rua João Pinheiro",
        numero: "59",
        complemento: "Loja5",
        bairro: "Belvedere",
        cidade: "Belo Horizonte",
        uf: "MG",
        cep: "30880-891",
        email_contato: "lojaazul@gmail.com",
        email_xml: "lojaazul2@gmail.com",
        telefone1: "(032) 3559 8740",
        telefone2: "(032) 3574 8920",
        vendedor_do_cliente_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       
},
{
  cnpj: "33.852.141/0001-72",
  razao_social: "Loja Vermelha",
  nome_fantasia: "Loja Vermelha",
  logradouro: "Rua Getúlio Vargas",
  numero: "352",
  complemento: "Loja 8",
  bairro: "Castelo",
  cidade: "Belo Horizonte",
  uf: "MG",
  cep: "38880-851",
  email_contato: "lojavermelha@gmail.com",
  email_xml: "lojavermelha@gmail.com",
  telefone1: "(032) 3559 8741",
  telefone2: "(032) 3574 8741",
  vendedor_do_cliente_id: 2,
  createdAt: new Date(),
  updatedAt: new Date()
 
},

],{})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Clientes',null,{})
  }
}
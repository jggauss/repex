'use strict';

const { query } = require("express");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Industrias', [
    {
        cnpj: "28.532.111/0001-72",
			  razao_social: "Industria verde",
				nome_fantasia: "Industria verde",
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
				createdAt: new Date(),
				updatedAt: new Date()
   },
   {
        cnpj: "88.552.456/7899-72",
        razao_social: "Industria Azul",
        nome_fantasia: "Industria Azul",
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
        createdAt: new Date(),
        updatedAt: new Date()
       
},
{
  cnpj: "88.852.141/0005-72",
  razao_social: "Industria Vermelha",
  nome_fantasia: "Industria Vermelha",
  logradouro: "Rua Getúlio Vargas",
  numero: "352",
  complemento: "Industria 8",
  bairro: "Castelo",
  cidade: "Belo Horizonte",
  uf: "MG",
  cep: "38880-851",
  email_contato: "lojavermelha@gmail.com",
  email_xml: "lojavermelha@gmail.com",
  telefone1: "(032) 3559 8741",
  telefone2: "(032) 3574 8741",
  createdAt: new Date(),
  updatedAt: new Date()
 
},

],{})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Industrias',null,{})
  }
}
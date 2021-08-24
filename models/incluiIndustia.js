const dbind = require("./db")
const incluiIndustria = dbind.sequelize.define("industrias", {
    cnpj: {
        type: dbind.Sequelize.STRING,
        

    },

    ie: {
        type: dbind.Sequelize.STRING
    },

    razao_social: {
        type: dbind.Sequelize.STRING
    },

    nome_fantasia: {
        type: dbind.Sequelize.STRING
    },

    logradouro: {
        type: dbind.Sequelize.STRING
    },

    numero: {
        type: dbind.Sequelize.STRING
    },

    complemento: {
        type: dbind.Sequelize.STRING
    },

    bairro: {
        type: dbind.Sequelize.STRING
    },

    cidade: {
        type: dbind.Sequelize.STRING
    },

    uf: {
        type: dbind.Sequelize.STRING
    },

    cep: {
        type: dbind.Sequelize.STRING
    },

    email_contato: {
        type: dbind.Sequelize.STRING
    },

    email_xml: {
        type: dbind.Sequelize.STRING
    },
    telefone1: {
        type: dbind.Sequelize.STRING
    },
    telefone2: {
        type: dbind.Sequelize.STRING
    },
    comissao: {
        type: dbind.Sequelize.NUMBER
    },

    
})

module.exports = incluiIndustria;
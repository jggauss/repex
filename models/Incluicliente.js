const db = require("./db")
const incluiCliente = db.sequelize.define("clientes", {
    cnpj: {
        type: db.Sequelize.STRING,
        
    },

    ie: {
        type: db.Sequelize.STRING
    },

    razao_social: {
        type: db.Sequelize.STRING
    },

    nome_fantasia: {
        type: db.Sequelize.STRING
    },

    logradouro: {
        type: db.Sequelize.STRING
    },

    numero: {
        type: db.Sequelize.STRING
    },

    complemento: {
        type: db.Sequelize.STRING
    },

    bairro: {
        type: db.Sequelize.STRING
    },

    cidade: {
        type: db.Sequelize.STRING
    },

    uf: {
        type: db.Sequelize.STRING
    },

    cep: {
        type: db.Sequelize.STRING
    },

    email_contato: {
        type: db.Sequelize.STRING
    },

    email_xml: {
        type: db.Sequelize.STRING
    },
    telefone1: {
        type: db.Sequelize.STRING
    },
    telefone2: {
        type: db.Sequelize.STRING
    },

    vendedor: {
        type: db.Sequelize.NUMBER
    }
})

module.exports = incluiCliente
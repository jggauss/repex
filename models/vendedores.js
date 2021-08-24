const dbind = require("./db")
const Vendedores = dbind.sequelize.define("vendedores", {
    nome: {
        type: dbind.Sequelize.STRING,
    },

    email: {
        type: dbind.Sequelize.STRING
    },

    telefone: {
        type: dbind.Sequelize.STRING
    },

    comissao: {
        type: dbind.Sequelize.NUMBER
    },
    
})

module.exports = Vendedores;
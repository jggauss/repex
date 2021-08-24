const db = require("./db")
const Produtos = db.sequelize.define("produtos", {
    sku: {
        type: db.Sequelize.STRING,
        
    },

    nome_produto: {
        type: db.Sequelize.STRING
    },

    preco: {
        type: db.Sequelize.NUMBER
    },

    peso_bruto: {
        type: db.Sequelize.STRING
    },

    altura: {
        type: db.Sequelize.INTEGER
    },

    largura: {
        type: db.Sequelize.INTEGER
    },

    fabricante_id: {
        type: db.Sequelize.INTEGER
    },

   
})

module.exports = Produtos
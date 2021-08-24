const Sequelize = require("sequelize")
const sequelize = new Sequelize('repex2','root','452319', {
    host: 'localhost',
    dialect:'mysql'
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('cruduserDB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Banco de dados conectado!')
} catch (error) {
    console.log(error)
}

module.exports = sequelize
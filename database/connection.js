require('dotenv').config()

const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DB_URL, { operatorAliases: false })

module.exports = db

require('dotenv').config()

const Sequelize = require('sequelize')

// const db = new Sequelize('postgresql://postgres:root@127.0.0.1:5432/express_admin_area', { operatorAliases: false })
const db = new Sequelize(process.env.DB_URL, { operatorAliases: false })

module.exports = db

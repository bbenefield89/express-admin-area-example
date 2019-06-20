const Sequelize = require('sequelize')

const db = require('../connection')

const Electronics = db.define(
  'electronics',
  {
    name: Sequelize.STRING,
    price: Sequelize.INTEGER
  },
  {
    scopes: {
      expressAdminArea: {
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      }
    }
  }
)

module.exports = Electronics
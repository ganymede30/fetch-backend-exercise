const Sequelize = require('sequelize')
const db = require('../db')

const Version = db.define('version', {
  versionNumber: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Version

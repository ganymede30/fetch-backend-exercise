const Sequelize = require('sequelize')
const db = require('../db')

const Version = db.define('version', {
  versionNumber1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  versionNumber2: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Version

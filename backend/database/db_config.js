const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('coffee_website', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize;

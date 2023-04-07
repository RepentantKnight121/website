// const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: 'postgres',
//   password: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   database: 'coffee_website'
// });
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('coffee_website', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize;

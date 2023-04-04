const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgresql');

const Account = sequelize.define('account', {
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  displayName: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  permisson: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }},
  {
    tableName: 'account',
    timestamps: false 
  });
                                          
module.exports = Account;
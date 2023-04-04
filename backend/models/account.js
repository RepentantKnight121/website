const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgresql');

const Account = sequelize.define('account', {
  account_username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true,
  },
  account_password: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  account_displayname: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  account_email: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  account_permission: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }},
  {
    tableName: 'account',
    timestamps: false 
  });
                                          
module.exports = Account;
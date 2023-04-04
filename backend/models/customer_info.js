const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgresql');

const Customer_info = sequelize.define('customer_info', {
  customer_id: {
    type: DataTypes.STRING(100),
    allowNull: true,
    primaryKey: true,
  },
  customer_name: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  customer_phone_number: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  customer_email: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  customer_address: {
    type: DataTypes.STRING(400),
    allowNull: true
  }
  }, 
  {
    tableName: 'customer_info',
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
  });

module.exports = Customer_info;
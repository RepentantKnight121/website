const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgresql');

const CustomerInfo = sequelize.define('customer_info', {
  id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING(14),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(400),
    allowNull: false
  }
  }, {
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
});

module.exports = CustomerInfo;
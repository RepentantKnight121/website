const { DataTypes } = require('sequelize');
const sequelize = require('../database/db_config');

const Discount = sequelize.define('discount', {
  discount_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,
  },
  discount_event_name: {
    type: DataTypes.STRING(200) ,
    allowNull: true
  },
  discount_percent: {
    type: DataTypes.FLOAT,
    allowNull: true
  }},
  {
    tableName: 'discount',
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
  }
);

module.exports = Discount;
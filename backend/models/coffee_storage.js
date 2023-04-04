const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgresql');

const Coffe_storage = sequelize.define('coffee_storage', {
  coffee_id: {
    type: DataTypes.STRING(20) ,
    allowNull: true
  },
  coffee_amount: {
    type: DataTypes.BIGINT,
    allowNull : true 
  }
  }, {
    tableName: 'coffee_storage',
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
});

module.exports = Coffe_storage;
const { DataTypes } = require('sequelize');
const sequelize = require('../postgresql/db_config');

const CoffeeStorage = sequelize.define('coffee_storage', {
  coffee_id: {
    type: DataTypes.STRING(20) ,
    references: {
      model: 'coffee_info', 
      key: 'coffee_id' 
    }
  },
  coffee_amount: {
    type: DataTypes.BIGINT,
    allowNull : false 
  }
  }, {
    tableName: 'coffee_storage',
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
});

module.exports = CoffeeStorage;
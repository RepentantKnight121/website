const { DataTypes } = require('sequelize');
const sequelize = require('../postgresql/db_config');

const CoffeeCategory = sequelize.define('coffee_category', {
  coffee_category_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,
    field: 'coffee_category_id' // Tên cột trong PostgreSQL
  },
  coffee_category_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'coffee_category_name' // Tên cột trong PostgreSQL
  }
  }, {
    tableName: "coffee_category", // Tên bảng trong PostgreSQL
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
  });

module.exports = CoffeeCategory;
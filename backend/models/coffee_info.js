const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgresql');

const CoffeeInfo = sequelize.define('coffee_info', {
  coffee_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,
  },
  coffee_category_id: {
    type: DataTypes.STRING(50),
    references: {
      model: 'coffee_category', // Tên bảng chứa khóa chính
      key: 'coffee_category_id' // Tên cột khóa chính tham chiếu
    }
  },
  coffee_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  coffee_image: {
    type: DataTypes.BLOB('long'),
    allowNull: true
  },
  coffee_price: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  coffee_detail: {
    type: DataTypes.STRING(700),
    allowNull: false  
  },
  }, {
    tableName: 'coffee_info',
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
});
                                          
module.exports = CoffeeInfo;
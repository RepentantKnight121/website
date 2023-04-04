const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgresql');

const CoffeeInfo = sequelize.define('coffee_info', {
  coffee_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,
  },
  categoryId: {
    type: DataTypes.STRING(50),
    references: {
      model: 'coffee_category', // Tên bảng chứa khóa chính
      key: 'coffee_category_id' // Tên cột khóa chính tham chiếu
    }
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  image: {
    type: DataTypes.BLOB('long'),
    allowNull: false
  },
  price: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  detail: {
    type: DataTypes.STRING(700),
    allowNull: false  
  },
  }, {
    tableName: 'coffee_info',
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
});
                                          
module.exports = CoffeeInfo;
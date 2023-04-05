const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgresql');

const CustomerInfo = sequelize.define('customer_info', {
  customer_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,
  },
  account_username: {
    type: DataTypes.STRING(20),
    references: {
      model: 'account', // Tên bảng chứa khóa chính
      key: 'account_username'      // Tên cột khóa chính tham chiếu
    }
  },
  customer_name: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  customer_phone_number: {
    type: DataTypes.STRING(14),
    allowNull: false
  },
  customer_email: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  customer_address: {
    type: DataTypes.STRING(400),
    allowNull: false
  }
  }, {
    tableName: 'customer_info',
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
});

module.exports = CustomerInfo;
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db_config');

const BillInfo = sequelize.define('bill_info', {
  bill_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,
  },
  customer_id: {
    type: DataTypes.STRING(20),
    references: {
      model: 'customer_info', // Tên bảng chứa khóa chính
      key: 'customer_id'      // Tên cột khóa chính tham chiếu
    }
  },
  discount_id: {
    type: DataTypes.STRING(20),
    references: {
      model: 'discount', 
      key: 'discount_code_id' 
    },
    allowNull: false
  },
  customer_address: {
    type: DataTypes.STRING(400),
    allowNull: true
  },
  payment_time: {
    type: DataTypes.DATE, // nếu muốn lấy ngày thôi thì dùng DAYONLY
    allowNull : false
  }
  }, {
    tableName: 'bill_info',
    timestamps: false 
  });
                                       
module.exports = BillInfo;
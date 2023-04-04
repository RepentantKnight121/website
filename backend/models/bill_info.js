const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgresql');

const BillInfo = sequelize.define('bill_info', {
  id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,
  },
  customer_id: {
    type: DataTypes.STRING(60),
    references: {
      model: 'customer_info', // Tên bảng chứa khóa chính
      key: 'customer_id'      // Tên cột khóa chính tham chiếu
    }
  },
  discount_code_id: {
    type: DataTypes.STRING(20),
    references: {
      model: 'discount', 
      key: 'discount_code_id' 
    }
  },
  address: {
    type: DataTypes.STRING(400)
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
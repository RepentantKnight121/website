const { DataTypes } = require('sequelize');
const sequelize = require('../database/db_config');

const BillDetail = sequelize.define('bill_detail', {
  bill_detail_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,
  },
  bill_id: {
    type: DataTypes.STRING(20) ,
    references: {
      model: 'bill_info', // Tên bảng chứa khóa chính
      key: 'bill_id'      // Tên cột khóa chính tham chiếu
    }
  },
  coffee_id: {
    type: DataTypes.STRING(20) ,
    references: {
      model: 'coffee_info', 
      key: 'coffee_id' 
    }
  },
  bill_amount: {
    type: DataTypes.BIGINT,
    allowNull: false,
  }
  }, {
    tableName: 'bill_detail',
    timestamps: false 
});

module.exports = BillDetail;
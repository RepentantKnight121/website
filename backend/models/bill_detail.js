const Sequelize = require('sequelize');
const sequelize = require('../database/postgresql');

                                        // với coffee_category chính là tên bảng trong PostgreSQL 
const BillDetail = sequelize.define('bill_detail', {
    id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    bill_id: {
        type: Sequelize.STRING(20) ,
        references: {
          model: 'bill_info', // Tên bảng chứa khóa chính
          key: 'bill_id' // Tên cột khóa chính tham chiếu
        }
    },
    coffee_id: {
        type: Sequelize.STRING(20) ,
        references: {
          model: 'coffee_info', 
          key: 'coffee_id' 
        }
    },
    amount: {
        type: Sequelize.BIGINT,
        allowNull: false,
    }
    }, {
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
    });
                                        


module.exports = BillDetail;

const Sequelize = require('sequelize');
const sequelize = require('../database/postgresql');

const BillInfo = sequelize.define('bill_info', {
    id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    customer_id: {
        type: Sequelize.STRING(60) ,
        references: {
          model: 'customer_info', // Tên bảng chứa khóa chính
          key: 'customer_id' // Tên cột khóa chính tham chiếu
        }
    },
    discount_code_id: {
        type: Sequelize.STRING(20) ,
        references: {
          model: 'discount', 
          key: 'discount_code_id' 
        }
    },
    address: {
        type: Sequelize.STRING(400)
    },
    payment_time: {
        type: Sequelize.DATE, // nếu muốn lấy ngày thôi thì dùng DAYONLY
        allowNull : false
    }
    }, {
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
    });
                                        


module.exports = BillInfo;

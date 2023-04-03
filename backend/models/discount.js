const Sequelize = require('sequelize');
const sequelize = require('../database/postgresql');

const Discount = sequelize.define('discount', {
    id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    eventName: {
        type: Sequelize.STRING(200) ,
        allowNull: false
    },
    discount_percent: {
        type: Sequelize.FLOAT,
        allowNull : false 
    }
    }, {
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
    });
                                        


module.exports = BillDetail;

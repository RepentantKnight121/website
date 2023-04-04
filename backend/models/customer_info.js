const Sequelize = require('sequelize');
const sequelize = require('../database/postgresql');

const CustomerInfo = sequelize.define('customer_info', {
    id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(60) ,
        allowNull : false
    },
    phoneNumber: {
        type: Sequelize.STRING(14) ,
    },
    email: {
        type: Sequelize.STRING(80),
    },
    address: {
        type: Sequelize.STRING(400), 
    }
    }, {
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
    });
                                        


module.exports = CustomerInfo;

const Sequelize = require('sequelize');
const sequelize = require('../database/postgresql');

                                    
const Account = sequelize.define('account', {
    username: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    displayName: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    permisson: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
    },
     {
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
    });
                                          
module.exports = Account;
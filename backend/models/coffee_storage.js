const Sequelize = require('sequelize');
const sequelize = require('../database/postgresql');

const CoffeeStorage = sequelize.define('coffee_storage', {
    coffee_id: {
        type: Sequelize.STRING(20) ,
        references: {
          model: 'coffee_info', 
          key: 'coffee_id' 
        }
    },
    coffee_amount: {
        type: Sequelize.BIGINT,
        allowNull : false 
    }
    }, {
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
    });
                                        


module.exports = CoffeeStorage;

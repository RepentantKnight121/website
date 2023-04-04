const Sequelize = require('sequelize');
const sequelize = require('../database/postgresql');

                                        // với coffee_category chính là tên bảng trong PostgreSQL 
const CoffeeInfo = sequelize.define('coffee_info', {
    coffee_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    categoryId: {
        type: Sequelize.STRING(50) ,
        references: {
          model: 'coffee_category', // Tên bảng chứa khóa chính
          key: 'coffee_category_id' // Tên cột khóa chính tham chiếu
        }
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    image: {
        type: Sequelize.BLOB('long'),
        allowNull: false
    },
    price: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    ingredient: { type: Sequelize.STRING(100) },

    characteristic: { type: Sequelize.STRING(700) },

    shelf_life: { type: Sequelize.STRING(100)  },

    mass: { type: Sequelize.STRING(100) },

    instructions: {  type: Sequelize.STRING(700) },

    detail: { type: Sequelize.STRING(700) },
    }, {
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
    });
                                          
module.exports = CoffeeInfo;
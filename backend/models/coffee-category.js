const Sequelize = require('sequelize');
const sequelize = require('../database/postgresql');

                                        // với coffee_category chính là tên bảng trong PostgreSQL 
const CoffeeCategory = sequelize.define('coffee_category', {
  id: {
    type: Sequelize.STRING(20),
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
} , 
    {
        tableName: "coffee_category" // dùng để chỉ định chính xác bảng trong PostgreSQL
    }
);

(async () => {
    const newCoffee = await CoffeeCategory.findAll({
      attributes: ['coffee_category_id', 'coffee_category_name']
    });
    const ListCoffee =(newCoffee.map(item => item.toJSON())); // chỉ hiển thị 2 thuộc tính 'coffee_category_id' và 'coffee_category_name'
    console.log(ListCoffee);
  })();

module.exports = CoffeeCategory;

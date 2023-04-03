const Sequelize = require('sequelize');
const sequelize = require('../database/postgresql');

                                        // với coffee_category chính là tên bảng trong PostgreSQL 
const CoffeeCategory = sequelize.define('coffee_category', {
    id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
        field: 'coffee_category_id' // Tên cột trong PostgreSQL
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field: 'coffee_category_name' // Tên cột trong PostgreSQL
    }
    }, {
    tableName: "coffee_category" ,// Tên bảng trong PostgreSQL
    timestamps: false // Bỏ qua thuộc tính `created_at` và `updated_at` tự động của Sequelize
    });
                                          

const convert_to_Json = (data) =>{
    return data.map(item => item.toJSON()); // chỉ hiển thị 2 thuộc tính 'coffee_category_id' và 'coffee_category_name'
}
// Lấy tất cả các mục
CoffeeCategory.getList = async () => {
    try{
    const ListCoffee = await CoffeeCategory.findAll({
        attributes: ['coffee_category_id', 'coffee_category_name']
      });
      return (convert_to_Json(ListCoffee));
    }
    catch (err) {
        console.log(err.message);
    }
  };
// Tạo 1 field mới
CoffeeCategory.createCategory = async (id, name) => {
    try{
         await CoffeeCategory.create({ id, name }, { tableName: "coffee_category" });
    }
    catch (err) {
        console.log(err.message);
    }
};


module.exports = CoffeeCategory;

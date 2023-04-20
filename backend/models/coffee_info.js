const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db_config');
const CoffeeCategory = require('./coffee_category');

const CoffeeInfo = sequelize.define('coffee_info', {
  coffee_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,
  },
  coffee_category_id: {
    type: DataTypes.STRING(50),
    references: {
      model: 'coffee_category',
      key: 'coffee_category_id',
    },
  },
  coffee_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  coffee_image: {
    type: DataTypes.BLOB('long'),
    allowNull: true,
  },
  coffee_price: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  coffee_detail: {
    type: DataTypes.STRING(700),
    allowNull: false,
  },
}, {
  tableName: 'coffee_info',
  timestamps: false,
});

CoffeeInfo.belongsTo(CoffeeCategory, { foreignKey: 'coffee_category_id', as: 'coffee_category' });

module.exports = CoffeeInfo;
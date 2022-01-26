const sequelize = require('../../config/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const Product = sequelize.define('Product', {
  name_product: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price_product: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stock_product: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status_product: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  image_product: {
    type: DataTypes.TEXT
  }
});

module.exports = Product;

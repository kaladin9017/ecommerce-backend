const Sequelize = require('sequelize');
const sequelizeConnection = require('../sequelize-connection');
const Category = require('./category-model.js');

const Product = sequelizeConnection.define('product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  product_name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      len: [1, 255]
    }
  },
  product_description: {
    type: Sequelize.TEXT,
    validate: {
      len: [0, 10000]
    }
  },
  images : {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})

Product.belongsTo(Category, {through: 'productCategory', foreignKey: 'categoryId'});
module.exports = Product;

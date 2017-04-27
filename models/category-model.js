const Sequelize = require('sequelize');
const sequelizeConnection = require('../sequelize-connection');

const Category = sequelizeConnection.define('category', {
  category_name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Category;

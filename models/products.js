'use strict';
module.exports = function(sequelize, DataTypes) {
  var products = sequelize.define('products', {
    product_name: DataTypes.STRING,
    product_description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        products.belongsTo(models.categories)
      }
    }
  });
  return products;
};

'use strict';
module.exports = function(sequelize, DataTypes) {
  var categories = sequelize.define('categories', {
    category_name: DataTypes.STRING,
    category_description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return categories;
};

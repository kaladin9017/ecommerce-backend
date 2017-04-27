'use strict';
module.exports = function(sequelize, DataTypes) {
  var completed_orders = sequelize.define('completed_orders', {
    order_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    customer_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return completed_orders;
};

'use strict';
module.exports = function(sequelize, DataTypes) {
  var customer_accounts = sequelize.define('customer_accounts', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [2,20],
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [5,255]
    },
    order_history: DataTypes.ARRAY,
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return customer_accounts;
};

const Sequelize = require('sequelize');
const sequelizeConnection = require('../sequelize-connection');

const CustomerAccount = sequelizeConnection.define('customer_account', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true,
      len: [1, 255]
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      len: [0, 255]
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      len: [0, 255]
    }
  },
  order_history : {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
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

module.exports = CustomerAccount;

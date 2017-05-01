const Sequelize = require('sequelize');
const sequelizeConnection = require('../sequelize-connection');
const bcrypt = require('bcrypt-nodejs');

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
  },
}, {
  hooks: {
    beforeCreate: function(account, options, next) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) { return err }
        bcrypt.hash(account.dataValues.password, salt, null, function(err, hash) {
          if (err) { return err; }
          account.dataValues.password = hash;
          console.log(account)
          next();
        });
    });
    }
  }
})

module.exports = CustomerAccount;

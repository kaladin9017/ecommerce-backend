const Sequelize = require('sequelize');

const sequelizeConnection = new Sequelize('postgres://postgres:@localhost:5432/ecommerce_development');

sequelizeConnection
.authenticate()
.then((err) => console.log('Sequelize connection successful'))
.catch((err) => console.log('Unable to connect to the database:', err));

module.exports = sequelizeConnection;

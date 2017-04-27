const Sequelize = require('sequelize');
const sequelizeConnection = require('../sequelize-connection');
const Category = require('../models/category-model');

//Category.sync will create the category table
Category.sync({force: true})
//add the following three tags to the database:
.then(() => Category.bulkCreate([
  {category_name: 'Accessory'},
  {category_name: 'Tops'},
  {category_name: 'Bottoms'},
  {category_name: 'Shoes'},
], {validate: true}))
//the following tag should NOT be added to your database:
//(if your validations are setup correctly)
.then(() => Category.create({category_name: ''}))
.then(() => Category.create({category_name: ['sdsd', 'genrsadfse2']}))
// if everything is correct, you should only have THREE tags in your database
.catch((err) => console.log(err)); //eslint-disable-line no-console

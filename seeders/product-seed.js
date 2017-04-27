const Sequelize = require('sequelize');
const sequelizeConnection = require('../sequelize-connection');
const Product = require('../models/product-model');

//Product.sync will create the Product table
Product.sync({force: true})
.then(() => sequelizeConnection.sync())

.then(() => Product.create(
  {
    product_name: 'Earing',
    product_description: 'Brand new Expensive Earing',
    images: ['http://blog.caranddriver.com/wp-content/uploads/2015/11/BMW-2-series.jpg'],
    categoryId: 1
  }
))
// .then(() => Product.create(
//   {
//     category: 'sell',
//     title: 'Old Expensive Car Pricy',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet nulla vitae eleifend imperdiet. Suspendisse lorem nunc, luctus ut faucibus eget, efficitur vel sem. Sed eu vulputate diam. Nulla et eleifend urna, sed laoreet nunc. Vivamus porttitor congue ornare. In hac habitasse platea dictumst. Nunc tempus sapien id nulla sagittis blandit. Mauris bibendum odio a venenatis rhoncus. Proin placerat convallis odio nec lobortis. Curabitur scelerisque vestibulum metus, at tempor ex porttitor vitae.',
//     images: ['https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png'],
//     email: "breadmaker@gmail.com"
//   }
// ))
// .then((product) => {
//   product.addCategory([1,2])
// })
// .then(() => Product.create(
//   {
//     category: 'rent',
//     title: 'Old Expensive Apartment',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet nulla vitae eleifend imperdiet. Suspendisse lorem nunc, luctus ut faucibus eget, efficitur vel sem. Sed eu vulputate diam. Nulla et eleifend urna, sed laoreet nunc. Vivamus porttitor congue ornare. In hac habitasse platea dictumst. Nunc tempus sapien id nulla sagittis blandit. Mauris bibendum odio a venenatis rhoncus. Proin placerat convallis odio nec lobortis. Curabitur scelerisque vestibulum metus, at tempor ex porttitor vitae.',
//     images: ['http://www.brownstonechimney.com/images/806_brownstones_washington.jpg'],
//     email: "catscatscatscats@gmail.com"
//   }
// ))
// .then((product) => {
//   product.addCategory([3])
// })
//the following Product should NOT be added to your database:
//(if your validations are setup correctly)

// if everything is correct, you should only have THREE artists in your database
.catch((err) => console.log(err));

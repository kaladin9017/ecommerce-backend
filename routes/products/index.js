const router = require("express").Router();
const path = require("path");
const ProductModel = require(path.join(__dirname, '../../models/product-model'));

router.route('/all')
.get((req, res) => {
  ProductModel.findAll({})
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  });
})


module.exports = router;

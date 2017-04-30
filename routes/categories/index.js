const router = require("express").Router();
const path = require("path");
const CategoryModel = require(path.join(__dirname, '../../models/category-model'));

router.route('/all')
.get((req, res) => {
  CategoryModel.findAll({})
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  });
})


module.exports = router;

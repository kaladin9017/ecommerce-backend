const router = require("express").Router();
const path = require("path");
const AccountModel = require(path.join(__dirname, '../../models/customer-account-model'));

router.route('/all')
.get((req, res) => {
  AccountModel.findAll({})
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  });
})


module.exports = router;

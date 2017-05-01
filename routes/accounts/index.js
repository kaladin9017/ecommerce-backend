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

router.route('/create')
.post((req, res) => {
  AccountModel.create(
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      order_history: []
    }
  )
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  });
res.send("success")
})


module.exports = router;

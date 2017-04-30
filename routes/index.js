const router = require('express').Router();

router.use('/accounts', require('./accounts'));
router.use('/categories', require('./categories'));
router.use('/products', require('./products'));

module.exports = router;

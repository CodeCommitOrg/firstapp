var express = require('express');
var productController = require('../controllers/productController');

var router = express();

router.get('/create-product', productController.createProduct);

module.exports = router;
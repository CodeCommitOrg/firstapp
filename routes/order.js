var express = require('express');

var orderController = require('../controllers/orderController');

var router = express();

router.get('/create-router', orderController.createOrder);

module.exports = router;
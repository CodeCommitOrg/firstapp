var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/',userController.listUser);
router.get('/create-user',userController.userCreate);

module.exports = router;
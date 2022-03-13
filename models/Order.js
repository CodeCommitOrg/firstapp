var Sequelize = require('sequelize');
var sequelize = require('../config/db');

var Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    billingAdress: {
        type: Sequelize.TEXT
    },
    shippingAddress: {
        type: Sequelize.TEXT
    }

})
var Sequelize = require('sequelize');
var sequelize = require('../config/db');

var Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    productName: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    cost: {
        type: Sequelize.DECIMAL(10,2)
    },
    brand: {
        type: Sequelize.STRING
    }
})

module.exports = Product;
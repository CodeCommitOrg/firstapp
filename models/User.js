var Sequelize = require('sequelize');
var sequelize = require('../config/db');

var User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    }
},
{
    freezeTableName: true
});

module.exports = User;
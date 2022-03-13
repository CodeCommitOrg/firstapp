var Sequelize = require('sequelize');

var config = require('./config.json');

var sequelize = new Sequelize(config.dbname, config.username, config.password, config);

module.exports = sequelize;
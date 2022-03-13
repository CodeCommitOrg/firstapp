var express = require('express');
var sequelize = require('./config/db');

var user = require('./routes/user');
var product = require('./routes/product');
var order = require('./routes/order');

exports.Product = require('./models/Product');
exports.Order = require('./models/Order');
var User = require('./models/User');

// Order.hasMany(Product);
// Order.hasMany(User);


var app = express();


app.use('/user', user);
app.use('/product', product);
app.use('/order', order);

// app.use(function(req, res, next) {
//     Order.hasMany(Product, { foreignKey: 'productId', foreignKeyConstraint: true });
//     Order.belongsToMany(Product, { foreignKey: 'productId', foreignKeyConstraint: true });
    
//     // Product.belongsToMany(Order, { through : ClientCompany });
//     next();
// })

// Order.hasMany(Product);

// User.belongsTo(Order);
// Order.hasMany(User);

exports.Product.hasOne(exports.Order);
exports.Order.belongsTo(exports.Product);

// Product.belongsTo(Order, { foreignKey: 'productId', foreignKeyConstraint: true });

sequelize.sync({force: true}).then(function() {
    app.listen(3000, () => {
        console.log("server connected to port 3000");
    })
})


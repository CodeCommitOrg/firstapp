var Product = require('../models/Product');

exports.createProduct = function(req, res) {
    var product = {
        name: 'C5',
        category: 'Mobile',
        cost: 10500.00,
        brand: 'RealMe'
    }

    Product.create({
        productName: product.name,
        category: product.category,
        cost: product.cost,
        brand: product.brand
    }).then(() => {
        res.send('Product Created Successfully.');
    })
    
}
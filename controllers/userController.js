var User = require('../models/User');

exports.userCreate = function(req, res) {
    console.log("New user created");
    var firstName = "Vihaan";
    var lastName = "Ekhande";

    User.create({
        firstName: firstName,
        lastName: lastName
    }).then(() => {
        res.send('User created sucessfully');
    })
}

exports.listUser = function(req, res) {
    User.findOne().then(user => {
        res.send(user.get('firstName'));
    })
}
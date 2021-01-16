//import fruit model
const Fruit = require('../model/FruitModel');

//handle get action
exports.index = (req,res) => {
    Fruit.find()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.send(error);
        })
}

//handle post create action
exports.new = (req,res) => {
    const fruit = new Fruit({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    });
    fruit.save()
        .then(data => {
            res.json({
                message: "Data Created",
                data: data
            });
        })
        .catch(error => {
            res.send(error);
        })
}

//handle get view action
exports.view = (req,res) => {
    Fruit.findById(req.params._id)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.json({
                message: "Something isnt quiet right"
            });
        })
}

//handle put update action
exports.update = (req,res) => {
    Fruit.findByIdAndUpdate(req.params._id, 
    {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    }).then(data => {
        res.json({
            message: "Data Updated",
            data: data
        });
    }).catch(error => {
        res.json({
            message: "Something isnt quiet right"
        });
    })
}

//handle delete action
exports.delete = (req,res) => {
    Fruit.findByIdAndDelete(req.params._id)
        .then(data => {
            res.json({
                message: "Data Deleted",
                data: data
            });
        })
        .catch(error => {
            res.json({
                message: "Something isnt quiet right"
            });
        })
}


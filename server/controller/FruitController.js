//import fruit model
const Fruit = require('../model/FruitModel');

//handle get action
exports.index = (req,res) => {
    Fruit.get((error, results) => {
        if (error) {
            res.json({
                status: "error",
                message: error
            });
        } else {
            res.send(results);
        }
        
    });
}

//handle post create action
exports.new = (req,res) => {
    var fruit = new Fruit();
    fruit.name = req.body.name ? req.body.name : fruit.name;
    fruit.price = req.body.price;
    fruit.stock = req.body.stock;
    fruit.save = (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json({
                message: "New Data Created",
                data: fruit
            });
        }
    }
}

//handle get view action
exports.view = (req,res) => {
    Fruit.findById(req.params.fruit_id, (error, results) => {
        if (error) {
            res.json(error)
        } else {
            res.send(results)
        }
    });
}

//handle put update action
exports.update = (req,res) => {
    Fruit.findById(req.params.fruit_id, (error, results) => {
        if (error) res.send(error);
        fruit.name = req.body.name ? req.body.name : fruit.name;
        fruit.price = req.body.price;
        fruit.stock = req.body.stock;
        fruit.save = (err) => {
            if (err) {
                res.json(err);
            } else {
                res.json({
                    message: "Data Updated",
                    data: fruit
                });
            }
        }
    });
}

//handle delete action
exports.delete = (req,res) => {
    Fruit.remove({
        _id: req.params.fruit_id
    }, (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.json({
                message: "Data Deleted"
            });
        }
    });
}


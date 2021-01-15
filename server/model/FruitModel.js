const mongoose = require('mongoose');

//Setup schema
const fruitSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
});

//Export model
const Fruit = module.exports = mongoose.model('fruit', fruitSchema);

module.exports.get = (callback, limit) => {
    Fruit.find(callback).limit(limit);
}
const router = require('express').Router();

router.get('/', (req,res) => {
    res.json({
        status: "API is working",
        message: "Welcome to my api"
    });
});

//import controller
const fruitController = require('../controller/FruitController');

//Fruit Router
router.route('/data-fruit')
    .get(fruitController.index)
    .post(fruitController.new)

router.route('/data-fruit/:_id')
    .get(fruitController.view)
    .put(fruitController.update)
    .delete(fruitController.delete)

module.exports = router;
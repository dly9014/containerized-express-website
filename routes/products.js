var Router = require('router');
var bodyParser = require('body-parser');
var products = require('../data/data.js');

router = Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/add', function (req,res){
    res.render('createProduct');
});

router.get('/:id', function (req,res){
    var product = products[req.params.id - 1];
    if (!product){
        throw new Error(req.params.id + " not found")
    }
    res.render('productDetails',{model : product});

})

router.post('/add', function (req,res){

    console.log(req.body.name, req.body.price);
    products.push({id: products.length + 1, name: req.body.name, price: req.body.price});
    res.status(204).send('done');
});

module.exports = router;
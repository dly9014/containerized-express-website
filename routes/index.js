
var Router = require('router');
var products = require('../data/data.js');
var myrouter = Router();

myrouter.get('/', function (req,res){
    res.render('index', {model: products});

});

module.exports = myrouter;
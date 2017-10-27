var express = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 8000;

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware
app.use(express.static(path.join(__dirname, 'public')));

// define routes
var indexRoute = require('./routes/index.js');
var productsRoute = require('./routes/products.js');
app.use('/', indexRoute);
app.use('/products', productsRoute);

app.use(function (err, req, res, next) {
    console.log(err);
    res.render('error', {
        message: err
    } );
    next(err);
});

app.listen(port, function () {
    console.log('listening on port %s', port);
});

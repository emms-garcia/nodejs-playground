const db = require('../db');
const Router = require('restify-router').Router;
const routerInstance = new Router();

routerInstance.get('/products', function (req, res, next) {
    db.products.all(req).then(data => {
        res.json({ success: true, data });
    }).catch(error => next(error));
});

routerInstance.post('/products', function (req, res, next) {
    db.products.add(req.body).then(data => {
        res.json({ success: true, data });
    }).catch(error => next(error));
});

routerInstance.get('/products/:product_id', function (req, res, next) {
    db.products.find(req.params.product_id).then(data => {
        if (data) {
            res.json({ success: true, data });
        } else {
            res.status(404);
            res.json({
                message: 'Product Not Found',
                success: false,
            });
        }
    }).catch(error => next(error));
});

routerInstance.del('/products/:product_id', function (req, res, next) {
    db.products.remove(req.params.product_id).then(data => {
        if (data) {
            res.status(204);
            res.json({ success: true, data });
        } else {
            res.status(404);
            res.json({
                message: 'Product Not Found',
                success: false,
            });
        }
    }).catch(error => next(error));
});

module.exports = routerInstance;

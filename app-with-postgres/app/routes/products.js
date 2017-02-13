const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/products', function (req, res, next) {
    models.Products.findAll().then(data => {
        res.json({ success: true, data });
    }).catch(error => next(error));
});

router.post('/products', function (req, res, next) {
    models.Products.create(req.body).then(data => {
        res.json({ success: true, data });
    }).catch(error => next(error));
});

router.get('/products/:product_id', function (req, res, next) {
    console.log(req.params);
    models.Products.findOne({ where: {id: req.params.product_id} }).then(data => {
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

router.delete('/products/:product_id', function (req, res, next) {
    models.Products.destroy({ where: {id: req.params.product_id} }).then(data => {
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

module.exports = router;

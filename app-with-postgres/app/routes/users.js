const models = require('../models');
const express = require('express');

const router = express.Router();

router.get('/users', function (req, res, next) {
    models.Users.findAll().then(data => {
        res.json({ success: true, data });
    }).catch(error => next(error));
});

router.post('/users', function (req, res, next) {
    models.Users.create(req.body).then(data => {
        res.json({ success: true, data });
    }).catch(error => next(error));
});

router.get('/users/:user_id', function (req, res, next) {
    models.Users.findOne({ where: { id: req.params.user_id }}).then(data => {
        if (data) {
            res.json({ success: true, data });
        } else {
            res.status(404);
            res.json({
                message: 'User Not Found',
                success: false,
            });
        }
    }).catch(error => next(error));
});

module.exports = router;

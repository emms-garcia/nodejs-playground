const db = require('../db');
const Router = require('restify-router').Router;
const routerInstance = new Router();

routerInstance.get('/users', function (req, res, next) {
    db.users.all(req).then(data => {
        res.json({ success: true, data });
    }).catch(error => next(error));
});

routerInstance.post('/users', function (req, res, next) {
    db.users.add(req.body.name).then(data => {
        res.json({ success: true, data });
    }).catch(error => next(error));
});

routerInstance.get('/users/:user_id', function (req, res, next) {
    db.users.find(req.params.user_id).then(data => {
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

module.exports = routerInstance;

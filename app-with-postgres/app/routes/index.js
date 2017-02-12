const Router = require('restify-router').Router;

const routerInstance = new Router();
routerInstance.add('/v1', require('./products'));
routerInstance.add('/v1', require('./users'));

module.exports = routerInstance;

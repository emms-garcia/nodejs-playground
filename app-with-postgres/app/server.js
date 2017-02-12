const logger = require('morgan');
const restify = require('restify');
const plugins = require('restify-plugins');

const db = require('./db');
const routerInstance = require('./routes');

const server = restify.createServer({
  name: 'nodejs-playground',
  version: '1.0.0'
});

server.use(logger('dev'));
server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.queryParser());
server.use(plugins.bodyParser());

routerInstance.applyRoutes(server);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

module.exports = server;

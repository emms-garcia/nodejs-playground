const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const db = require('./db');
const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(8080, function () {
  console.log('%s listening at %s', app.name, app.url);
});

module.exports = app;

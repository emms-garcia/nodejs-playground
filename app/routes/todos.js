var express = require('express');
var mongoose = require('mongoose');

var Todo = require('../models/Todo.js');

var router = express.Router();

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Todo.find(function (err, todos) {
    if (err) {
        return next(err);
    }
    res.render('todos', { title: 'Todo!', todos: todos });
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Todo.create(req.body, function (err, post) {
    if (err) {
        return next(err);
    }
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

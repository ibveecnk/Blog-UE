var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose');
var app = express();

router.post('/', function (req, res, next) {
  if (req.body.password === 'qwertzuiopü+') {
    res.cookie('logged_in', '01e6efdb-9421-4271-83eb-b685f618e2c3');
    app.locals.admin = true;
    res.redirect('success');

  } else {
    app.locals.admin = false;
    res.redirect('/');
  }
});

module.exports = router;

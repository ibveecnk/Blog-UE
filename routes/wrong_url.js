var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose')
var app = express();

router.get('/', function (req, res, next) {
  res.render('wrong_url', { title: 'Falsche URL' });
});

module.exports = router;

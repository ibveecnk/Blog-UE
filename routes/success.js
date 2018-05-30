var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose')


router.get('/', function(req, res, next) {
  res.render('success', { title: 'Erfolgreich eingeloggt.'});
});

module.exports = router;

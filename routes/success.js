var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose');
var app = express();


router.get('/', function (req, res, next) {
    res.render('success', { title: 'Erfolgreich eingeloggt.', admin: req.admin, globalCategory: req.categories });
});

module.exports = router;

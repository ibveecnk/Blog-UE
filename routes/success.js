var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose');
var app = express();


router.get('/', function (req, res, next) {
    if (req.cookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
        app.locals.admin = true;
    } else {
        app.locals.admin = false;
    }
    res.render('success', { title: 'Erfolgreich eingeloggt.' });
});

module.exports = router;

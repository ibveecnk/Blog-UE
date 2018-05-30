var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose')

router.post('/', function (req, res, next) {
    if(req.body.password === 'qwertzuiopü+'){
        res.cookie('logged_in', '01e6efdb-9421-4271-83eb-b685f618e2c3', {expire : new Date() + 123});
        res.send('Success')
    }   else    {
        res.redirect('/');
    }
  });  

module.exports = router;

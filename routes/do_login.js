var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose');
var app = express();

router.post('/', function (req, res, next) {
  if (req.body.password === 'admin') {
    var ip = (req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress).split(',')[0];
    res.cookie('logged_in', '01e6efdb-9421-4271-83eb-b685f618e2c3', { signed: true, maxAge: 3600000 });
    console.log('User with IP: ' + ip + ' logged in')
    res.redirect('/');
  } else {
    var ip = (req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress).split(',')[0];
    console.log('User with IP: ' + ip + ' failed to login with Password: ' + req.body.password)
    res.redirect('/');
  }
});

module.exports = router;

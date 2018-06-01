var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose')
var app = express();


app.get('/', function (req, res, next) {
    if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
      req.admin = true;
    }
    next();
  })
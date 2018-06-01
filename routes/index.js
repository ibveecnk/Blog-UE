var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose')
var app = express();


router.get('/', function (req, res, next) {
  console.log("INDEXROUTER")
  if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    req.admin = true;
  } else {
    req.admin = false;
  }
  db.Category.find({}).lean().exec(function (err, category) {
    req.categories = category;
    res.render('index', { title: 'webprojekt Blog' , admin:req.admin, admin:req.admin, globalCategory: req.categories});
  });
});

module.exports = router;

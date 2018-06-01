var express = require('express');
var app = express();
var router = express.Router();
var db = require('../database.js')

router.get('/', function (req, res, next) {
  if(req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    db.Category.find({}).lean().exec(function(err,categories){
      console.log(categories);
      db.Author.find({}).lean().exec(function(err,authors){
        res.render('addpost',{categories: categories, authors: authors, title: 'Post inzufügen', admin:req.admin, globalCategory: req.categories});
      })
    })
  } else {
    res.redirect('/login');
  }
});
module.exports = router;

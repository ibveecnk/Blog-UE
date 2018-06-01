var express = require('express');
var app = express();
var router = express.Router();
var db = require('../database.js')

router.get('/', function (req, res, next) {
  /*db.Category.find({}, function (err, result) {
    console.log(result);
    db.Author.find({}, function (err, authors) {
      console.log(req.signedCookies.logged_in);
      if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
        res.render('addpost', { categories: result, authors: authors, title: "Post hinzufügen" , admin:req.admin})
      } else {
        //app.locals.admin = false;
        res.redirect('/login')
      }
    })
  })
  //res.redirect('/');*/
  if(req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    db.Category.find({}).lean().exec(function(err,categories){
      console.log(categories);
      db.Author.find({}).lean().exec(function(err,authors){
        res.render('addpost',{categories: categories, authors: authors, title: 'Post inzufügen', admin:req.admin});
      })
    })
  } else {
    res.redirect('/login');
  }
});
module.exports = router;

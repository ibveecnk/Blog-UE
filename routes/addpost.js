var express = require('express');
var app = express();
var router = express.Router();
var db = require('../database.js')

router.get('/', function (req, res, next) {
  db.Category.find({}, function (err, result) {
    db.Author.find({}, function (err, authors) {
      if (req.cookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
        res.render('addpost', { categories: result, authors: authors, title: "Post hinzufügen" })
      } else {
        app.locals.admin = false;
        res.redirect('/login')
      }
    })
  })
});
module.exports = router;

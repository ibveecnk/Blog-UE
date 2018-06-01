var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js');

/* GET users listing. */
router.get('/:category', function (req, res, next) {
  var categoryURL = req.params.category;
  if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    db.Category.findOne({ caturl: categoryURL }, function (err, result) {
      db.Post.find({category:result._id}).lean().exec(function(err,posts) {
        if(posts.length == 0) {
          var del = true;
        } else {
          var del = false;
        }
        res.render('editcategory', { title: 'Kategorie bearbeiten',delete:del, category: result, admin: req.admin, globalCategory: req.categories });
      })
    })
  } else {
    res.redirect('/login');
  }
});
router.get('/', function (req, res, next) {
  db.Category.find({}).lean().exec(function (err, result) {
    result.forEach(element => {
      element.path = 'editcategory/';
    });
    res.render('categoryoverview', { title: 'Kategorie bearbeiten', category: result, admin: req.admin, globalCategory: req.categories });
  })
})
module.exports = router;
